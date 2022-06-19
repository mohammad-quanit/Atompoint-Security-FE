import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { message, Table } from 'antd';
import { addKeysForColumns, checklistApiUrl, columns } from '../../Utils';
import UnlockChecklistButton from '../../Components/UnlockChecklistButton';
import { axiosInstance } from '../../Config/axios';

const Home = ({
  setTotal,
  data,
  setData,
  selectedRowKeys,
  setSelectedRowKeys,
  filteredData
}) => {
  const [searchParams] = useSearchParams();
  const [initLoading, setInitLoading] = React.useState(true);

  const isUnlocked = searchParams.get('unlockchecklist');

  React.useEffect(() => {
    const getChecklists = async () => {
      let response = await axiosInstance.get(checklistApiUrl(isUnlocked));
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
        const response = await axiosInstance.put(
          `/checklist/update/${record.key}`,
          { checked: IsSelected }
        );
        if (response.status == 200) {
          message.success('Updated Succesfully');
        }
      } catch (error) {
        message.error(error);
      }
    },
    hideSelectAll: true,
  };

  console.log(data, filteredData)

  return (
    <>
      <Table
        size='large'
        loading={initLoading}
        dataSource={filteredData?.length ? filteredData : data}
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
