import React, { useState, useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';

const EventForm = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [showPdf, setShowPdf] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !date || !time || !location || !address) {
            alert('Por favor completa todos los campos.');
            return;
        }
        setShowPdf(true);
    };

    // Ref para el componente de la invitación
    const componentRef = useRef();

    // Función para imprimir usando react-to-print
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <Container className="mt-4">
            {!showPdf ? (
                <div>
                    <h2 className="mb-4">Crear Nueva Invitación</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Fecha:</Form.Label>
                            <Form.Control
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Hora:</Form.Label>
                            <Form.Control
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Lugar:</Form.Label>
                            <Form.Control
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Dirección:</Form.Label>
                            <Form.Control
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Generar PDF
                        </Button>
                    </Form>
                </div>
            ) : (
                <div>
                    <Button className="mb-3" variant="secondary" onClick={() => setShowPdf(false)}>
                        Volver al Formulario
                    </Button>
                    <div className="p-4 border rounded" ref={componentRef}>
                        <h2 className="text-center mb-4">¡Te invitamos!</h2>
                        <h4 className="text-center mb-4">Acompáñanos a un evento especial</h4>
                        <div className="mb-3">
                            <strong>Nombre:</strong> {name}
                        </div>
                        <div className="mb-3">
                            <strong>Fecha:</strong> {new Date(date).toLocaleDateString('es-ES')}
                        </div>
                        <div className="mb-3">
                            <strong>Hora:</strong> {time}
                        </div>
                        <div className="mb-3">
                            <strong>Lugar:</strong> {location}
                        </div>
                        <div className="mb-3">
                            <strong>Dirección:</strong> {address}
                        </div>
                        <div className="mb-3">
                            <strong>Descripción:</strong> {description}
                        </div>
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                address
                            )}`}
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver Ubicación en Google Maps
                        </a>
                    </div>
                    <Button variant="primary" className="mt-3" onClick={handlePrint}>
                        Imprimir PDF
                    </Button>
                </div>
            )}
        </Container>
    );
};

export default EventForm;
