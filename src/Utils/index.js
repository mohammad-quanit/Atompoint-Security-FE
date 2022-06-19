import { Tag } from 'antd';

const count = 5;
export const checklistApiUrl = (unlockCheck) => {
  if (!unlockCheck) return `/checklists?count=${count}`;
  return `/checklists`;
};

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
