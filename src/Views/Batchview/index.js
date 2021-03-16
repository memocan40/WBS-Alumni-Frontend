import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import StudentGrid from '../../Components/Studentcardgrid';
import Loader from '../../Components/Loader';

import Api from '../../Api/Api';

export default function BatchView({}) {
    const { batchname } = useParams();
    
    const [studObject, setStudObj] = useState('');
 
    useEffect( async()=> {
        try{
            const res = await Api.getUserByBatch(batchname)

            if(res) {
                setStudObj(res.data.data);
            }
        } catch(e) {
            console.error(e);
        }
    }, [])

  if(studObject){

  return (
    <>
      <Header />
        <StudentGrid filteredStudents={studObject}/>
      <Footer />
    </>
  ); } else {
    return  <Loader />
  }
}
