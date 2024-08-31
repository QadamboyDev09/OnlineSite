
import { useEffect } from 'react';
import Banner from './companents/Banner';
import Courses from './companents/Courses';
import Statistika from './companents/Statistika';
import Aos from "aos";
import Work from './companents/Work';
import CardCourses from './companents/CardCourses';
import Mentor from './companents/Mentor';


function App() {
	useEffect(()=>{
		Aos.init({
			duration:2000,
		})
	},[])
	return (
			<div>
        <Banner/>
				<Statistika/>
				<Courses/>
				<Work/>
				<CardCourses/>
				<Mentor/>
			</div>
	);
}

export default App;
