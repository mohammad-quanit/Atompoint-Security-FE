import React from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

import { Table } from 'antd';
import { addKeysForColumns, checklistsApiUrl, columns } from '../../Utils';
import UnlockChecklistButton from '../../Components/UnlockChecklistButton';

const Home = ({
  setTotal,
  data,
  setData,
  selectedRowKeys,
  setSelectedRowKeys,
}) => {
  const [searchParams] = useSearchParams();
  const [initLoading, setInitLoading] = React.useState(true);

  const isUnlocked = searchParams.get('unlockchecklist');

  React.useEffect(() => {
    const getChecklists = async () => {
      let response = await axios.get(checklistsApiUrl(isUnlocked));
      if (response.status == 200) {
        setInitLoading(false);
        const { items, total } = response.data;
        const checkListData = addKeysForColumns(items);
        setTotal(total);
        setData(checkListData);
        setSelectedRowKeys(
          checkListData
            .filter((checklist) => checklist.checked)
            .map((checklist) => checklist.key)
        );
      }
    };
    getChecklists();
  }, []);

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => setSelectedRowKeys(selectedRowKeys),
    onSelect: async (record, IsSelected, _selectedRows, _nativeEvent) => {
      try {
        const response = await axios.put(
          `http://localhost:4000/v1/checklist/update/${record.key}`,
          { checked: IsSelected }
        );
        if (response.status == 200) {
          alert('updated');
        }
      } catch (error) {
        alert(error);
      }
    },
    hideSelectAll: true,
  };

  return (
    <>
      <Table
        size='large'
        loading={initLoading}
        dataSource={data}
        columns={columns}
        rowSelection={rowSelection}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 20,
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {record.pageDetail}
            </p>
          ),
        }}
      />
      {!isUnlocked && <UnlockChecklistButton />}
    </>
  );
};

export default Home;
