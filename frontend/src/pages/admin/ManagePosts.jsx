const ManagePosts = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif text-nature-900">Manage Posts</h1>
        <button className="bg-nature-600 text-white px-4 py-2 rounded hover:bg-nature-700 transition">Create New</button>
      </div>
      <div className="bg-white rounded-xl border border-nature-100 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-nature-50 border-b border-nature-200 text-sm tracking-wider text-gray-600 uppercase">
              <th className="p-4 font-medium">Title</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-nature-100 hover:bg-nature-50 transition">
              <td className="p-4 text-gray-800 font-medium">Sample Post Title</td>
              <td className="p-4 text-gray-600">Oct 10, 2023</td>
              <td className="p-4">
                <button className="text-nature-600 hover:underline mr-4">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ManagePosts;