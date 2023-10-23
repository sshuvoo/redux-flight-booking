import { useSelector } from 'react-redux';
import PreviewHeader from './PreviewHeader';
import SingleData from './SingleData';

export default function PreviewData() {
   const flightList = useSelector((state) => state.flightBook);
   return (
      flightList.length >= 1 && (
         <div className="table-container">
            <table className="booking-table">
               <PreviewHeader />
               <tbody
                  className="divide-y divide-gray-300/20"
                  id="lws-previewBooked"
               >
                  {flightList.length >= 1 &&
                     flightList.map((flight) => (
                        <SingleData flight={flight} key={flight.id} />
                     ))}
               </tbody>
            </table>
         </div>
      )
   );
}
