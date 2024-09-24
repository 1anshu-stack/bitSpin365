
const InfoBox = ({ label, value }) => {
    return (
        <div className="bg-white bg-opacity-50 text-black text-center rounded-lg p-4 m-2 w-40">
            <p className="text-xl font-bold">{value}</p>
            <p className="text-sm">{label}</p>
        </div>
    );
};

export default InfoBox;
