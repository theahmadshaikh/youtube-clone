const ButtonList : React.FC = () => {
  return (
    <div className="flex flex-col space-y-2">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Button 1</button>
      <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Button 2</button>
      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Button 3</button>
    </div>
  );
}

export default ButtonList;