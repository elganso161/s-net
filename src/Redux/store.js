// import dialogsReducer from "./dialogs-reducer";
// import navbarReducer from "./navbar-reducer";
// import profileReducer from "./profile-reducer";
// import usersReducer from "./users-reducer";

// import img1 from "../assets/img1.png";
// import img2 from "../assets/img2.png";
// import img3 from "../assets/img3.jpg";
// import img4 from "../assets/img4.png";
// import img5 from "../assets/img5.png";

// let store = {
//     _state: {
//         profilePage: {
//             postData: [
//                 { id: 1, message: "Hi, how are u?", likesCount: 1 },
//                 { id: 2, message: "my first post", likesCount: 5 },
//                 { id: 3, message: "post", likesCount: 20 },
//                 { id: 4, message: "my post", likesCount: 2 },
//             ],
//             newPostText: "",
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {
//                     id: 1,
//                     name: "Dimych",
//                     img: img1,
//                 },
//                 {
//                     id: 2,
//                     name: "Andrey",
//                     img: img2,
//                 },
//                 {
//                     id: 3,
//                     name: "Masha",
//                     img: img3,
//                 },
//                 {
//                     id: 4,
//                     name: "Sasha",
//                     img: img4,
//                 },
//                 {
//                     id: 5,
//                     name: "qwerty",
//                     img: img5,
//                 },
//             ],
//             messagesData: [
//                 { id: 1, message: "Lorem ipsum dolor" },
//                 { id: 2, message: "Lorem ipsum dolor sit amet." },
//                 { id: 3, message: "Hi" },
//                 { id: 4, message: "Hihihihi" },
//             ],
//             newMessageText: "",
//         },
//         navbarPage: {
//             friendsData: [
//                 {
//                     id: 1,
//                     img: img1,
//                     name: "Dimych",
//                 },
//                 {
//                     id: 2,
//                     img: img2,
//                     name: "Andrey",
//                 },
//                 {
//                     id: 3,
//                     img: img3,
//                     name: "Masha",
//                 },
//             ],
//         },
//         usersPage: {
//             users: [
//                 // {
//                 //     id: 1,
//                 //     photoUrl:
//                 //         "http://almode.ru/uploads/posts/2021-03/1617045949_35-p-dmitrii-nagiev-39.jpg",
//                 //     followed: true,
//                 //     fullName: "Dimych",
//                 //     status: "hi",
//                 //     location: { city: "Mink", country: "Belarus" },
//                 // },
//                 // {
//                 //     id: 2,
//                 //     photoUrl:
//                 //         "http://almode.ru/uploads/posts/2021-03/1617045949_35-p-dmitrii-nagiev-39.jpg",
//                 //     followed: true,
//                 //     fullName: "Masha",
//                 //     status: "OOO",
//                 //     location: { city: "Moscow", country: "Russia" },
//                 // },
//                 // {
//                 //     id: 3,
//                 //     photoUrl:
//                 //         "http://almode.ru/uploads/posts/2021-03/1617045949_35-p-dmitrii-nagiev-39.jpg",
//                 //     followed: false,
//                 //     fullNmae: "Andrey",
//                 //     status: "sleep",
//                 //     location: { city: "Kiev", country: "Ukraine" },
//                 // },
//             ],
//         },
//     },
//     _callSubscriber() {
//         console.log("state changed");
//     },

//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },

//     dispatch(action) {
//         this._state.profilePage = profileReducer(
//             this._state.profilePage,
//             action
//         );
//         this._state.dialogsPage = dialogsReducer(
//             this._state.dialogsPage,
//             action
//         );
//         this._state.navbarPage = navbarReducer(this._state.navbarPage, action);
//         this._state.usersPage = usersReducer(this._state.usersPage, action);

//         this._callSubscriber(this._state);
//     },
// };

// export default store;
