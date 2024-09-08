import React from 'react';
import { ClothingItem } from '../../types/recommendationsTypes';

interface ItemsTableProps {
  items: ClothingItem[];
}

const ItemsTable: React.FC<ItemsTableProps> = ({ items }) => {
  return (
    <div className="p-4 rounded-md mt-6 w-full">
      <div className="overflow-x-auto bg-white rounded-md">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-2 text-left">Product</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Size</th>
              <th className="p-2 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2 text-left">{item.type}</td>
                <td className="p-2 text-left">{item.brand}</td>
                <td className="p-2 text-left">{item.size || 'N/A'}</td>
                <td className="p-2 text-left">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemsTable;

