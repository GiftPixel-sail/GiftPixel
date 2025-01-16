import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import "../../styles/WalletDetails.css";

const WalletDetails = () => {
    const [walletData, setWalletData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchWalletDetails = async () => {
        const token = Cookies.get('token');

        if (!token) {
            setError('Authorization token is missing.');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get('https://auth-zxvu.onrender.com/api/auth/getWalletDetails', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.data.success) {
                setWalletData(response.data.wallet);
            } else {
                setError('Failed to fetch wallet details.');
            }
        } catch (err) {
            setError('Error fetching wallet details.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWalletDetails();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    const handleWithdraw = () => {
        console.log("Withdraw button clicked!");
        // Withdrawal functionality can be added here
    };

    return (

        <div className="wallet-container">
            {/* Wallet Balance */}
            <div className="wallet-balance">
                <p>Wallet Balance</p>
                <h1>₦{walletData?.balance?.toLocaleString() || "0.00"}</h1>
                <button onClick={handleWithdraw} className="withdraw-button">
                    Withdraw
                </button>
            </div>

            {/* Transaction History */}
            <div className="transaction-history">
                <h2>Transaction History</h2>
                <div className="transaction-filters">
                    <input type="text" placeholder="Search" className="search-box" />
                    <select className="filter">
                        <option>All Categories</option>
                    </select>
                    <select className="filter">
                        <option>All Status</option>
                    </select>
                </div>


    
                <table className="transactions-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>

                            <th>Status</th>

                            <th>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {walletData.transactions.map((transaction, index) => (
                            <tr key={index}>

                                <td>{new Date(transaction.timestamp).toLocaleString()}</td>
                                <td>{transaction.description || "N/A"}</td>
                                <td>₦{transaction.amount?.toLocaleString() || "0.00"}</td>
                                <td className={`status ${transaction.status ? transaction.status.toLowerCase() : "unknown"}`}>
                                    {transaction.status || "Unknown"}
                                </td>
                                <td>{transaction.Transaction_ID || "N/A"}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WalletDetails;
