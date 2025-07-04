const ChevronDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="25px" 
            viewBox="0 0 24 24"
            fill="grey"
            {...props} // Spread props to allow onClick and others
        >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
    );
};

export default ChevronDown;