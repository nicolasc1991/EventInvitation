import React, { useEffect, useState } from 'react';
import api from '../api';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await api.get('/events');
                setEvents(response.data);
            } catch (err) {
                console.error('Error fetching events:', err);
            }
        };

        fetchEvents();
    }, []);

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Event List
                </Typography>
                {events.map(event => (
                    <Card key={event._id} sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="h5" component="h3">
                                {event.title}
                            </Typography>
                            <Typography color="textSecondary">
                                {new Date(event.date).toLocaleDateString()}
                            </Typography>
                            <Typography variant="body2">
                                {event.location}
                            </Typography>
                            <Typography variant="body2">
                                {event.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Container>
    );
};

export default EventList;
