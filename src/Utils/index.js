import { Tag } from 'antd';

const count = 4;
export const checklistsApiUrl = (unlockCheck) => {
  if (!unlockCheck) return `http://localhost:4000/v1/checklists?count=${count}`;
  return `http://localhost:4000/v1/checklists`;
};

export const sendEmailApiUrl = `http://localhost:4000/v1/sendemail`;

export const addKeysForColumns = (data) => {
  return data.map((col) => ({ ...col, key: col.name }));
};

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Service',
    dataIndex: 'service',
    key: 'service',
  },
  {
    title: 'Risk',
    dataIndex: 'risk',
    key: 'risk',
    render: (risk) => {
      switch (risk) {
        case 'High':
          return <Tag color='red'>{risk.toUpperCase()}</Tag>;
        case 'Medium':
          return <Tag color='blue'>{risk.toUpperCase()}</Tag>;
        case 'Low':
          return <Tag color='green'>{risk.toUpperCase()}</Tag>;
        default:
          return null;
      }
    },
  },
];
