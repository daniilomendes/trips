const TripDetails = ({params}: {params : {tripId: string}}) => {
    return ( 
        <div>
            Detalhes da {params.tripId}
        </div>
     );
}
 
export default TripDetails;