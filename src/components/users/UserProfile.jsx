import React from 'react';
import { useParams } from "react-router-dom";
import userData from '../../assets/assets';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Ensure the default marker is used
const UserProfile = () => {
    const { userId } = useParams();
    const user = userData.find((user) => user.id === parseInt(userId));
    const lat = user.location.latitude;
    const lng = user.location.longitude;

    // Create custom marker icon with a larger size
    const customIcon = new L.Icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconSize: [40, 40], // Increased size for the marker
        iconAnchor: [20, 40], // Anchor the icon to the bottom of the marker
        popupAnchor: [0, -40] // Adjust popup position
    });

    return (
        <section className="w-full overflow-hidden dark:bg-gray-900">
            <div className="flex flex-col">
                {/* Cover Image */}
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="User Cover"
                    className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"
                />

                {/* Profile Image and Full Name */}
                <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
                    <img
                        src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZW9wbGV8ZW58MHwwfHx8MTcxMTExMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="User Profile"
                        className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
                    />
                    <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
                        {user.name}
                    </h1>
                </div>

                {/* Description */}
                <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
                    <p className="w-fit text-gray-700 dark:text-gray-400 text-md">
                        {user.description}
                    </p>

                    {/* Detail Section */}
                    <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                        <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                            <DetailsColumn
                                items={[
                                    { label: 'Name', value: `${user.name}` },
                                    { label: 'Date Of Birth', value: `${user.dob}` },
                                    { label: 'Gender', value: `${user.gender}` },
                                ]}
                            />
                            <DetailsColumn
                                items={[
                                    { label: 'Location', value: `${user.address}` },
                                    { label: 'Phone Number', value: `${user.phone}` },
                                    { label: 'Email', value: `${user.email}` },
                                ]}
                            />
                        </div>

                        <div className="my-10 lg:w-[100%] md:h-[20rem] xs:w-full xs:h-[15rem]">
                            <h1 className="w-fit font-serif my-4 pb-1 pr-2 rounded-b-md border-b-4 border-blue-600 dark:border-b-4 dark:border-yellow-600 dark:text-white lg:text-4xl md:text-3xl xs:text-xl">
                                Location
                            </h1>
                            <MapContainer
                                center={[lat, lng]}
                                zoom={13}
                                style={{ width: "100%", height: "100%", borderRadius: "0.5rem" }}
                            >
                                {/* Tile Layer */}
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                {/* Marker with Custom Icon */}
                                <Marker position={[lat, lng]} icon={customIcon}>
                                    <Popup>
                                        User Location: {lat}, {lng}
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const DetailsColumn = ({ items }) => (
    <div className="w-full">
        <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
            {items.map(({ label, value }) => (
                <div className="flex flex-col py-3" key={label}>
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">{label}</dt>
                    <dd className="text-lg font-semibold">{value}</dd>
                </div>
            ))}
        </dl>
    </div>
);

export default UserProfile;
