const page = ({ params }: { params: { id: string } }) => {
	return <div className='text-3xl mt-20'>{params.id}</div>;
};

export default page;
