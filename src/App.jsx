import './App.scss';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Serves from './Components/Serves/Serves';
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';


function App() {
	return (
		<>
			<Header />
			<Main />
			<Serves/>
			<Form/>
			<Footer />
		</>
	);
}

export default App;
