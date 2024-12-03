import './App.css';
import * as React from 'react'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'my-counter': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

function App() {
    return (<my-counter></my-counter>);
}

export default App;