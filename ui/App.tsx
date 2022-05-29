import { useEffect, useState } from 'react'
import './app.less'

function App() {
    const [msg] = useState('React0')

    useEffect(() => {
        console.log('ok?0')
        window.colorpicker();
        console.log('ok?')
    }, [])

    return (
        <div>
            <div className="hello">Hello {msg}</div>
            {/* <div>
                <button
                    onClick={() => {
                        alert('hello')
                    }}
                >Send Message</button>
            </div> */}
        </div>
    )
}
export default App
