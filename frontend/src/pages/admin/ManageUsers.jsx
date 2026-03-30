const ManageUsers = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-serif mb-8 text-nature-900">Manage Users</h1>
      <div className="bg-white rounded-xl border border-nature-100 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-nature-50 border-b border-nature-200 text-sm tracking-wider text-gray-600 uppercase">
              <th className="p-4 font-medium">Name</th>
              <th className="p-4 font-medium">Email</th>
              <th className="p-4 font-medium">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-nature-100 hover:bg-nature-50 transition">
              <td className="p-4 text-gray-800 font-medium">Jane Doe</td>
              <td className="p-4 text-gray-600">jane@example.com</td>
              <td className="p-4"><span className="px-2 py-1 bg-nature-100 text-nature-800 rounded-lg text-xs font-semibold">Admin</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ManageUsers;