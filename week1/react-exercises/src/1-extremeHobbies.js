const HobbyList = () => {
    const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
    
    return (
        <>
            {hobbies.map((hobby, index) => {
                return <Hobbies key={index} hobby={hobby}/>
            })}
        </>
    );
};

const Hobbies = ({hobby}) => <p>{hobby}</p>;

export default HobbyList;