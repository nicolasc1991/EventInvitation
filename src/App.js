import React, { useState } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import { Container, CssBaseline, Box } from '@mui/material';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [events, setEvents] = useState([]);

    const handleEventCreated = (event) => {
        setEvents([...events, event]);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{ my: 4 }}>
                    <EventForm onEventCreated={handleEventCreated} />
                    {/* <EventList events={events} /> */}
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default App;
