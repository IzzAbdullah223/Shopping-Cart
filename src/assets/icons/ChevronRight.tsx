const ChevronRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60px"
            viewBox="0 0 24 24"
            fill="
#c1c2bc"
            {...props} // Spread the props onto the <svg>
        >
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
        </svg>
    );
};

export default ChevronRight;