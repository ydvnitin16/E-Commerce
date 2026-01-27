const Toggle = ({ checked, onChange }) => {
    return (
        <button
            type='button'
            onClick={onChange}
            className={`flex items-center w-10 h-5 rounded-full p-1 transition-colors duration-300 cursor-pointer
                ${checked ? "bg-green-500" : "bg-gray-300"}
            `}
        >
            <div
                className={`w-4 h-4 bg-white rounded-full transition-transform duration-300
                    ${checked ? "translate-x-4.5" : "translate-x-0"}
                `}
            />
        </button>
    );
};

export default Toggle;
