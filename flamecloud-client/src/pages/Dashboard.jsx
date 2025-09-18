import { useLocation } from "react-router-dom";

function Dashboard() {
     const location = useLocation();
     const { summary, transactions } = location.state || {}

     if (!summary || !transactions) return <p>No data to display</p>

     return (
          <div style={{ maxWidth: "800px", margin: "50px auto" }}>
               <h2>Dashboard</h2>
               <div>
                    <p>Total Income: {summary.totalIncome}</p>
                    <p>Total Expense: {summary.totalExpense}</p>
                    <p>Net Balance: {summary.netBalance}</p>
               </div>
               <table border="1" cellPadding="5" cellSpacing="0" style={{ marginTop: "20px", width: "100%" }}>
                    <thead>
                         <tr>
                              <th>Date</th>
                              <th>Description</th>
                              <th>Merchant</th>
                              <th>Amount</th>
                              <th>Type</th>
                              <th>Category</th>
                         </tr>
                    </thead>
                    <tbody>
                         {transactions.map((t) => (
                              <tr key={t._id}>
                                   <td>{new Date(t.date).toLocaleDateString()}</td>
                                   <td>{t.description}</td>
                                   <td>{t.merchant}</td>
                                   <td>{t.amount}</td>
                                   <td>{t.type}</td>
                                   <td>{t.category}</td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}

export default Dashboard;
