import Header from "../components/common/Header";
import AddNewUserForm from "../components/users/AddNewUserForm";
import UsersTable from "../components/users/UsersTable";
import { useState } from "react"; // To manage modal state

const UsersPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Function to toggle the modal visibility
	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Users' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8 pb-10'>
				{/* Add User Button */}
				<div className="mb-6">
					<button
						onClick={toggleModal}
						className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
					>
						Add User
					</button>
				</div>

				{/* STATS */}
				<UsersTable />

				{/* Modal for Adding a User */}
				{isModalOpen && (<AddNewUserForm toggleModal={toggleModal}/>
				)}
			</main>
		</div>
	);
};

export default UsersPage;
