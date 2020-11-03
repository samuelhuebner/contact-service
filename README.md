# contact-service
Contact-service for the call-statistics app

## Provides the following REST - Endpoints:
- POST /api/contacts/public/
  Header: Bearer <Token>
  Body: { userdata }
 
- POST /api/contacts/public/:id
  Header: Bearer <Token>
  Body: { userdata }
  
- GET /api/contacts/public/
  Header: Bearer <Token>
  
