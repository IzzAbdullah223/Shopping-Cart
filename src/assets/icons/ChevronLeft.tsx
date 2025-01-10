const ChevronLeft: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="60px" 
            viewBox="0 0 24 24" 
            {...props} // Spread props to allow onClick and others
        >
            <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
        </svg>
    );
};

export default ChevronLeft;