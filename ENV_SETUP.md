# Environment Setup Guide

This document outlines all environment variables and configuration needed to run the CSRD Report Generator.

## Frontend Environment (.env in frontend/)

```env
VITE_API_URL=http://localhost:4000        # Backend API URL
VITE_DEV_PORT=3000                        # Development server port
```

## Backend Environment (.env in backend/)

```env
PORT=4000                                 # Server port
NODE_ENV=development                      # Environment (development/production)
CORS_ORIGIN=http://localhost:3000         # Frontend URL for CORS
```

## Local Development

1. Create `.env` files in both frontend/ and backend/ directories
2. Copy the above variables and adjust values if needed
3. Never commit `.env` files to version control

## Port Configuration

The application uses fixed ports for consistency:
- Frontend: 3000 (development)
- Backend: 4000

These ports can be modified through environment variables if needed, but keeping them consistent helps with testing and development.
