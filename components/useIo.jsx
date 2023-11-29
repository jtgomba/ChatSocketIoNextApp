import io from 'socket.io-client';

import { useState, useEffect, useRef } from 'react';

const useIo = () => {
    const isSecondRender = useRef(true)
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        async function initSocket() {
            await fetch('/api/socket');

            setSocket(io(undefined, {
                path: '/api/my_awesome_socket',
            }))
        }
        isSecondRender.current && initSocket()
        isSecondRender.current = false
    }, [])

    return socket
}

export default useIo