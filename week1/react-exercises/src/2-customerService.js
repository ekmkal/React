function Guarantee(props) {
    const details = props.details;

    return (
        <div className="guaranteeItem">
            <img src={details.img} alt="imgGuarantee" />
            <h2>{details.title}</h2>
            <p>{details.description}</p>
        </div>
    );
};

export default Guarantee;