#!/bin/bash

export SESSION_KEY=YIeqmFC1o7i2prCeyVR//nOVaVDZy5oGVL0tXqgGkrc=
# Start the Go backend
echo "Starting Go backend..."
cd server
reflex -r '\.go$' -s -- sh -c 'go run main.go' &

BACKEND_PID=$!

# Wait for the backend to start
while ! curl -s http://localhost:8080 > /dev/null; do
  sleep 1
done

echo "Backend is ready!"

# Start the React frontend
echo "Starting React frontend..."
cd ..
cd client
npm run dev &

FRONTEND_PID=$!

# Wait for both processes
wait $BACKEND_PID
wait $FRONTEND_PID
