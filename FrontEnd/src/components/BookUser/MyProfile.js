import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Container, Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
import "./MyProfile.css"

const MyProfile = () => {
  const [user, setUser] = useState(null);
  // const id = useParams().id;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/651283a05c9cd211092ddc50`);
        const userData = response.data.user;
        // console.log(userData);
        
        setUser(userData); // Set the entire user object to the state
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUser(null); // Set user to null in case of an error
      }
    };
    fetchUser();
  
  }, []); // The empty dependency array ensures this effect runs once

  // Log the user name when the user state changes
  useEffect(() => {
    if (user) {
      console.log('User Name:', user.name);
    }
  }, [user]); // Add 'user' as a dependency to this effect


  return (
    <Container maxWidth="md">
      <Card className="user-card">
        <CardContent>
          <Typography variant="h4">User Profile</Typography>
          {user ? (
            <div>
              <Typography variant="h5">Name: {user.name}</Typography>
              <Typography>Email: {user.email}</Typography>
              <Typography>Address: Chennai, Tamil Nadu</Typography>
            </div>
          ) : (
            <Typography>Loading user data...</Typography>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h4">Your Orders</Typography>
          <List>
            {user && user.pastOrders.length > 0 ? (
              user.pastOrders.map((order) => (
                <ListItem key={order._id}>
                  <ListItemText
                    primary={`Book Name: ${order.Bookname}`}
                    secondary={
                      <React.Fragment>
                        <Typography>Book Author: {order.author}</Typography>
                        <Typography>Book Price: {order.price}</Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ))
            ) : (
              <Typography>No Orders Available.</Typography>
            )}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MyProfile;

