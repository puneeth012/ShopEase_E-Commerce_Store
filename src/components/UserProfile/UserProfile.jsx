import React, { useState } from "react";
import { useUser } from "../../context/UserContext";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const { user, updateUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="mainContent"> {/* ✅ Keeps footer at bottom */}
      <div className={styles.profileContainer}>
        <h2>User Profile</h2>

        {user ? (
          <>
            {isEditing ? (
              <div className={styles.editContainer}>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={updatedUser.name}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={updatedUser.email}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                </label>
                <button className={styles.saveButton} onClick={handleSave}>
                  Save Changes
                </button>
              </div>
            ) : (
              <>
                <p className={styles.userInfo}><strong>Name:</strong> {user.name}</p>
                <p className={styles.userInfo}><strong>Email:</strong> {user.email}</p>
                <button className={styles.editButton} onClick={() => setIsEditing(true)}>
                  Edit Profile
                </button>
              </>
            )}

            <h3>Order History</h3>
            {user.orders && user.orders.length > 0 ? (
              <ul className={styles.orderList}>
                {user.orders.map((order) => (
                  <li key={order.id} className={styles.orderItem}>
                    <p><strong>Order ID:</strong> {order.id}</p>
                    <p><strong>Total:</strong> ₹{order.total}</p>
                    <p><strong>Date:</strong> {order.date}</p>
                    <ul>
                      {order.items.map((item, index) => (
                        <li key={index}>{item.name} - ₹{item.price}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.noOrders}>No orders placed yet.</p>
            )}
          </>
        ) : (
          <p className={styles.notLoggedIn}>Please log in to view your profile.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
