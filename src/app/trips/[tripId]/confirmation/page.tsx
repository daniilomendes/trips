const TripConfirmation = ({params}: {params: {tripId: string}}) => {
    return ( 
        <div>
            {params.tripId}
        </div>
     );
}
 
export default TripConfirmation;