'use client'
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'
import { logout } from "@/store/slices/authSlices";
import { useDispatch } from "react-redux";

const AdminSideBar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useDispatch();
  // Function to check if the current route matches the given path
  const isActive = (path) => pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    router.push('/admin');
  }

  return (
    <>
      <div className="dashboard-sidebar-menu">
        <ul>
          <li className={isActive("/admin/dashboard") ? "active" : ""}>
            <Link href="/admin/dashboard">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.93745 6.00005H1.31245C0.588727 6.00005 0 5.41132 0 4.68745V1.31245C0 0.588727 0.588727 0 1.31245 0H6.93745C7.66132 0 8.25005 0.588727 8.25005 1.31245V4.68745C8.25005 5.41132 7.66132 6.00005 6.93745 6.00005ZM1.31245 1.125C1.26275 1.12504 1.21509 1.1448 1.17994 1.17994C1.1448 1.21509 1.12504 1.26275 1.125 1.31245V4.68745C1.12501 4.73718 1.14476 4.78487 1.17991 4.82004C1.21505 4.85522 1.26273 4.875 1.31245 4.87505H6.93745C6.9872 4.87503 7.0349 4.85526 7.07008 4.82008C7.10526 4.7849 7.12503 4.7372 7.12505 4.68745V1.31245C7.125 1.26273 7.10522 1.21505 7.07004 1.17991C7.03487 1.14476 6.98718 1.12501 6.93745 1.125H1.31245ZM6.93745 18H1.31245C0.588727 18 0 17.4113 0 16.6875V8.81255C0 8.08868 0.588727 7.49995 1.31245 7.49995H6.93745C7.66132 7.49995 8.25005 8.08868 8.25005 8.81255V16.6875C8.25005 17.4113 7.66132 18 6.93745 18ZM1.31245 8.62495C1.26273 8.625 1.21505 8.64478 1.17991 8.67996C1.14476 8.71513 1.12501 8.76282 1.125 8.81255V16.6875C1.12504 16.7373 1.1448 16.7849 1.17994 16.8201C1.21509 16.8552 1.26275 16.875 1.31245 16.875H6.93745C6.98718 16.875 7.03487 16.8552 7.07004 16.8201C7.10522 16.7849 7.125 16.7373 7.12505 16.6875V8.81255C7.12503 8.7628 7.10526 8.7151 7.07008 8.67992C7.0349 8.64474 6.9872 8.62497 6.93745 8.62495H1.31245ZM16.6875 18H11.0625C10.3387 18 9.74995 17.4113 9.74995 16.6875V13.3125C9.74995 12.5887 10.3387 12 11.0625 12H16.6875C17.4113 12 18 12.5887 18 13.3125V16.6875C18 17.4113 17.4113 18 16.6875 18ZM11.0625 13.125C11.0128 13.125 10.9651 13.1447 10.9299 13.1799C10.8947 13.2151 10.875 13.2628 10.875 13.3125V16.6875C10.875 16.7373 10.8948 16.7849 10.93 16.8201C10.9651 16.8552 11.0128 16.875 11.0625 16.875H16.6875C16.7373 16.875 16.7849 16.8552 16.8201 16.8201C16.8552 16.7849 16.875 16.7373 16.875 16.6875V13.3125C16.875 13.2628 16.8552 13.2151 16.8201 13.18C16.7849 13.1448 16.7373 13.125 16.6875 13.125H11.0625ZM16.6875 10.5H11.0625C10.3387 10.5 9.74995 9.91132 9.74995 9.18745V1.31245C9.74995 0.588727 10.3387 0 11.0625 0H16.6875C17.4113 0 18 0.588727 18 1.31245V9.18745C18 9.91132 17.4113 10.5 16.6875 10.5ZM11.0625 1.125C11.0128 1.12501 10.9651 1.14476 10.93 1.17991C10.8948 1.21505 10.875 1.26273 10.875 1.31245V9.18745C10.875 9.2372 10.8947 9.2849 10.9299 9.32008C10.9651 9.35526 11.0128 9.37503 11.0625 9.37505H16.6875C16.7373 9.375 16.7849 9.35522 16.8201 9.32004C16.8552 9.28487 16.875 9.23718 16.875 9.18745V1.31245C16.875 1.26275 16.8552 1.21509 16.8201 1.17994C16.7849 1.1448 16.7373 1.12504 16.6875 1.125H11.0625Z" />
              </svg>
              <h6>Dashboard</h6>
            </Link>
          </li>
          <li className={isActive("/admin/users") ? "active" : ""}>
            <Link href="/admin/users">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M0.576752 14.7397C1.06384 15.2274 1.85313 15.2276 2.34107 14.7397L8.75357 8.32749L9.71579 9.28972C9.36131 9.64867 9.36219 10.2284 9.71942 10.5856L10.2652 11.1317C10.6232 11.4902 11.2074 11.4906 11.5658 11.1317L14.8359 7.8616C15.1945 7.50301 15.1945 6.91991 14.8359 6.56128L14.2898 6.0152C13.9331 5.65797 13.3526 5.65681 12.9937 6.01157L9.30489 2.3228C9.65937 1.96386 9.65849 1.38389 9.30127 1.02666L8.75519 0.480582C8.39712 0.121988 7.81321 0.121426 7.45462 0.480582L4.1848 3.75068C3.82621 4.10927 3.82621 4.69265 4.1848 5.05125L4.73088 5.59708C5.08681 5.953 5.66569 5.95726 6.02678 5.6007L6.98901 6.56293L0.576787 12.9754C0.0893805 13.4628 0.088607 14.2521 0.576752 14.7397ZM13.3776 6.40357C13.5173 6.26358 13.7612 6.26358 13.9014 6.40357L14.4475 6.94965C14.5916 7.09372 14.5926 7.32811 14.4475 7.4732L11.1774 10.7433C11.0374 10.8836 10.7936 10.8833 10.6536 10.7433L10.1078 10.1972C9.96368 10.0531 9.96266 9.81875 10.1078 9.67366C11.2649 8.51646 12.2299 7.55145 13.3776 6.40357ZM5.6428 5.20868C5.50281 5.34867 5.25925 5.34867 5.11926 5.20868L4.57317 4.66288C4.42917 4.51888 4.42801 4.28421 4.57317 4.13905L7.84299 0.868953C7.98298 0.728961 8.22654 0.728961 8.36681 0.868953L8.9129 1.41504C9.05806 1.5602 9.0569 1.79486 8.9129 1.93886L5.6428 5.20868ZM6.41557 5.21272L8.91694 2.7116L12.6049 6.39956L10.1038 8.90093L6.41557 5.21272ZM0.965123 13.3638L7.37734 6.95127L8.36516 7.93909L1.95266 14.3513C1.68846 14.6155 1.22876 14.615 0.965087 14.3513C0.692064 14.0783 0.692064 13.6369 0.965123 13.3638ZM16.7378 14.6636V14.0134C16.7378 13.3284 16.1804 12.771 15.4954 12.771H10.233C9.54803 12.771 8.99066 13.3284 8.99066 14.0134V14.6636C8.39673 14.7564 7.93953 15.2671 7.93953 15.8866V17.5144C7.9395 17.5505 7.94659 17.5862 7.96038 17.6195C7.97418 17.6529 7.99441 17.6832 8.01991 17.7087C8.04542 17.7342 8.07571 17.7544 8.10904 17.7682C8.14237 17.782 8.17809 17.7891 8.21417 17.7891H17.5143C17.5503 17.7891 17.5861 17.782 17.6194 17.7682C17.6527 17.7544 17.683 17.7342 17.7085 17.7087C17.734 17.6832 17.7542 17.6529 17.768 17.6195C17.7818 17.5862 17.7889 17.5505 17.7889 17.5144V15.8866C17.7889 15.2671 17.3317 14.7564 16.7378 14.6636ZM9.53998 14.0134C9.53998 13.6312 9.85083 13.3203 10.233 13.3203H15.4954C15.8777 13.3203 16.1885 13.6312 16.1885 14.0134V14.6442H9.53998V14.0134ZM17.2397 17.2397H8.48884V15.8866C8.48884 15.5044 8.79969 15.1935 9.18191 15.1935H16.5466C16.9288 15.1935 17.2397 15.5044 17.2397 15.8866V17.2397Z" />
                </g>
              </svg>
              <h6>Users</h6>
            </Link>
          </li>
          <li className={isActive("/admin/category") ? "active" : ""}>
            <Link href="/admin/category">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M9 0C6.1875 0 3.9375 2.25 3.9375 5.0625V7.3125C2.98125 7.3125 2.25 8.04375 2.25 9V16.3125C2.25 17.2687 2.98125 18 3.9375 18H14.0625C15.0188 18 15.75 17.2687 15.75 16.3125V9C15.75 8.04375 15.0188 7.3125 14.0625 7.3125V5.0625C14.0625 2.25 11.8125 0 9 0ZM14.625 9V16.3125C14.625 16.65 14.4 16.875 14.0625 16.875H3.9375C3.6 16.875 3.375 16.65 3.375 16.3125V9C3.375 8.6625 3.6 8.4375 3.9375 8.4375H14.0625C14.4 8.4375 14.625 8.6625 14.625 9ZM5.0625 7.3125V5.0625C5.0625 2.86875 6.80625 1.125 9 1.125C11.1938 1.125 12.9375 2.86875 12.9375 5.0625V7.3125H5.0625Z" />
                  <path d="M9 10.1248C8.04375 10.1248 7.3125 10.856 7.3125 11.8123C7.3125 12.5435 7.7625 13.1623 8.4375 13.3873V14.6248C8.4375 14.9623 8.6625 15.1873 9 15.1873C9.3375 15.1873 9.5625 14.9623 9.5625 14.6248V13.3873C10.2375 13.1623 10.6875 12.5435 10.6875 11.8123C10.6875 10.856 9.95625 10.1248 9 10.1248ZM9 12.3748C8.6625 12.3748 8.4375 12.1498 8.4375 11.8123C8.4375 11.4748 8.6625 11.2498 9 11.2498C9.3375 11.2498 9.5625 11.4748 9.5625 11.8123C9.5625 12.1498 9.3375 12.3748 9 12.3748Z" />
                </g>
              </svg>
              <h6>Category</h6>
            </Link>
          </li>
          <li className={isActive("/admin/material") ? "active" : ""}>
            <Link href="/admin/material">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M15.5059 7.44059H15.4613V6.34901C15.4613 2.84255 12.6188 0 9.11233 0C5.60583 0 2.76332 2.84255 2.76332 6.34901V7.44059H2.49601C1.51581 7.44059 0.758392 8.30938 0.758392 9.31189V12.0965C0.733703 13.0682 1.50139 13.8759 2.47303 13.9005C2.48071 13.9008 2.48834 13.9009 2.49601 13.901H4.14452C4.37801 13.89 4.55842 13.6918 4.54742 13.4583C4.54704 13.4499 4.5464 13.4415 4.5455 13.4331V7.97521C4.5455 7.7079 4.38957 7.44055 4.14452 7.44055H3.65441V6.34897C3.65441 3.33466 6.09803 0.891048 9.11233 0.891048C12.1266 0.891048 14.5702 3.33466 14.5702 6.34897V7.44055H14.0801C13.8351 7.44055 13.6792 7.70786 13.6792 7.97521V13.4331C13.6543 13.6656 13.8226 13.8742 14.055 13.899C14.0633 13.8999 14.0717 13.9005 14.0801 13.9009H14.5925L14.5479 13.9677C14.2183 14.4059 13.7908 14.7609 13.2996 15.0046C12.8084 15.2483 12.2671 15.3738 11.7187 15.3712C11.4754 14.1778 10.3105 13.4075 9.11706 13.651C8.09648 13.8591 7.36064 14.7529 7.35241 15.7945C7.3646 17.0161 8.35846 18 9.58013 17.9999C10.1849 17.9901 10.7614 17.7419 11.1841 17.3093C11.4693 17.0172 11.6562 16.6434 11.7187 16.24C12.4054 16.2426 13.0832 16.0849 13.6981 15.7793C14.313 15.4738 14.8481 15.0289 15.2608 14.4801L15.6841 13.8563C16.642 13.7895 17.2435 13.188 17.2435 12.3192V9.53456C17.2435 8.57673 16.5307 7.44059 15.5059 7.44059ZM3.65441 13.0099H2.49601C2.01631 12.9982 1.6369 12.5999 1.64859 12.1202C1.6488 12.1123 1.6491 12.1044 1.64948 12.0965V9.31185C1.64948 8.79949 2.00591 8.33164 2.49601 8.33164H3.65441V13.0099ZM10.5381 16.6856C10.4159 16.8181 10.2679 16.924 10.1031 16.9968C9.93832 17.0696 9.76033 17.1078 9.58018 17.1089C8.85538 17.0974 8.26721 16.519 8.24354 15.7945C8.24324 15.0686 8.83146 14.4799 9.55736 14.4796C10.2833 14.4793 10.872 15.0676 10.8723 15.7935V15.7945C10.8814 15.9581 10.8565 16.1218 10.7989 16.2752C10.7414 16.4286 10.6526 16.5684 10.5381 16.6856ZM16.3524 12.3193C16.3524 12.9208 15.7732 13.0099 15.5059 13.0099H14.5702V8.33168H15.5059C15.996 8.33168 16.3524 9.02228 16.3524 9.53464V12.3193Z" />
                </g>
              </svg>
              <h6>Material</h6>
            </Link>
          </li>
          <li className={isActive("/admin/auctions") ? "active" : ""}>
            <Link href="/admin/auctions">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M15.5059 7.44059H15.4613V6.34901C15.4613 2.84255 12.6188 0 9.11233 0C5.60583 0 2.76332 2.84255 2.76332 6.34901V7.44059H2.49601C1.51581 7.44059 0.758392 8.30938 0.758392 9.31189V12.0965C0.733703 13.0682 1.50139 13.8759 2.47303 13.9005C2.48071 13.9008 2.48834 13.9009 2.49601 13.901H4.14452C4.37801 13.89 4.55842 13.6918 4.54742 13.4583C4.54704 13.4499 4.5464 13.4415 4.5455 13.4331V7.97521C4.5455 7.7079 4.38957 7.44055 4.14452 7.44055H3.65441V6.34897C3.65441 3.33466 6.09803 0.891048 9.11233 0.891048C12.1266 0.891048 14.5702 3.33466 14.5702 6.34897V7.44055H14.0801C13.8351 7.44055 13.6792 7.70786 13.6792 7.97521V13.4331C13.6543 13.6656 13.8226 13.8742 14.055 13.899C14.0633 13.8999 14.0717 13.9005 14.0801 13.9009H14.5925L14.5479 13.9677C14.2183 14.4059 13.7908 14.7609 13.2996 15.0046C12.8084 15.2483 12.2671 15.3738 11.7187 15.3712C11.4754 14.1778 10.3105 13.4075 9.11706 13.651C8.09648 13.8591 7.36064 14.7529 7.35241 15.7945C7.3646 17.0161 8.35846 18 9.58013 17.9999C10.1849 17.9901 10.7614 17.7419 11.1841 17.3093C11.4693 17.0172 11.6562 16.6434 11.7187 16.24C12.4054 16.2426 13.0832 16.0849 13.6981 15.7793C14.313 15.4738 14.8481 15.0289 15.2608 14.4801L15.6841 13.8563C16.642 13.7895 17.2435 13.188 17.2435 12.3192V9.53456C17.2435 8.57673 16.5307 7.44059 15.5059 7.44059ZM3.65441 13.0099H2.49601C2.01631 12.9982 1.6369 12.5999 1.64859 12.1202C1.6488 12.1123 1.6491 12.1044 1.64948 12.0965V9.31185C1.64948 8.79949 2.00591 8.33164 2.49601 8.33164H3.65441V13.0099ZM10.5381 16.6856C10.4159 16.8181 10.2679 16.924 10.1031 16.9968C9.93832 17.0696 9.76033 17.1078 9.58018 17.1089C8.85538 17.0974 8.26721 16.519 8.24354 15.7945C8.24324 15.0686 8.83146 14.4799 9.55736 14.4796C10.2833 14.4793 10.872 15.0676 10.8723 15.7935V15.7945C10.8814 15.9581 10.8565 16.1218 10.7989 16.2752C10.7414 16.4286 10.6526 16.5684 10.5381 16.6856ZM16.3524 12.3193C16.3524 12.9208 15.7732 13.0099 15.5059 13.0099H14.5702V8.33168H15.5059C15.996 8.33168 16.3524 9.02228 16.3524 9.53464V12.3193Z" />
                </g>
              </svg>
              <h6>Auctions</h6>
            </Link>
          </li>
          <li className={isActive("/admin/lots") ? "active" : ""}>
            <Link href="/admin/lots">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M15.5059 7.44059H15.4613V6.34901C15.4613 2.84255 12.6188 0 9.11233 0C5.60583 0 2.76332 2.84255 2.76332 6.34901V7.44059H2.49601C1.51581 7.44059 0.758392 8.30938 0.758392 9.31189V12.0965C0.733703 13.0682 1.50139 13.8759 2.47303 13.9005C2.48071 13.9008 2.48834 13.9009 2.49601 13.901H4.14452C4.37801 13.89 4.55842 13.6918 4.54742 13.4583C4.54704 13.4499 4.5464 13.4415 4.5455 13.4331V7.97521C4.5455 7.7079 4.38957 7.44055 4.14452 7.44055H3.65441V6.34897C3.65441 3.33466 6.09803 0.891048 9.11233 0.891048C12.1266 0.891048 14.5702 3.33466 14.5702 6.34897V7.44055H14.0801C13.8351 7.44055 13.6792 7.70786 13.6792 7.97521V13.4331C13.6543 13.6656 13.8226 13.8742 14.055 13.899C14.0633 13.8999 14.0717 13.9005 14.0801 13.9009H14.5925L14.5479 13.9677C14.2183 14.4059 13.7908 14.7609 13.2996 15.0046C12.8084 15.2483 12.2671 15.3738 11.7187 15.3712C11.4754 14.1778 10.3105 13.4075 9.11706 13.651C8.09648 13.8591 7.36064 14.7529 7.35241 15.7945C7.3646 17.0161 8.35846 18 9.58013 17.9999C10.1849 17.9901 10.7614 17.7419 11.1841 17.3093C11.4693 17.0172 11.6562 16.6434 11.7187 16.24C12.4054 16.2426 13.0832 16.0849 13.6981 15.7793C14.313 15.4738 14.8481 15.0289 15.2608 14.4801L15.6841 13.8563C16.642 13.7895 17.2435 13.188 17.2435 12.3192V9.53456C17.2435 8.57673 16.5307 7.44059 15.5059 7.44059ZM3.65441 13.0099H2.49601C2.01631 12.9982 1.6369 12.5999 1.64859 12.1202C1.6488 12.1123 1.6491 12.1044 1.64948 12.0965V9.31185C1.64948 8.79949 2.00591 8.33164 2.49601 8.33164H3.65441V13.0099ZM10.5381 16.6856C10.4159 16.8181 10.2679 16.924 10.1031 16.9968C9.93832 17.0696 9.76033 17.1078 9.58018 17.1089C8.85538 17.0974 8.26721 16.519 8.24354 15.7945C8.24324 15.0686 8.83146 14.4799 9.55736 14.4796C10.2833 14.4793 10.872 15.0676 10.8723 15.7935V15.7945C10.8814 15.9581 10.8565 16.1218 10.7989 16.2752C10.7414 16.4286 10.6526 16.5684 10.5381 16.6856ZM16.3524 12.3193C16.3524 12.9208 15.7732 13.0099 15.5059 13.0099H14.5702V8.33168H15.5059C15.996 8.33168 16.3524 9.02228 16.3524 9.53464V12.3193Z" />
                </g>
              </svg>
              <h6>Lots</h6>
            </Link>
          </li>
          <li >
            <button>
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M10.125 15.75H7.125C7.02554 15.75 6.93016 15.7105 6.85983 15.6402C6.78951 15.5698 6.75 15.4745 6.75 15.375C6.75 15.2755 6.78951 15.1802 6.85983 15.1098C6.93016 15.0395 7.02554 15 7.125 15H10.125C10.7452 15 11.25 14.4953 11.25 13.875V10.125C11.25 10.0255 11.2895 9.93016 11.3598 9.85983C11.4302 9.78951 11.5255 9.75 11.625 9.75C11.7245 9.75 11.8198 9.78951 11.8902 9.85983C11.9605 9.93016 12 10.0255 12 10.125V13.875C12 14.9085 11.1592 15.75 10.125 15.75ZM17.625 8.25H10.125C10.0255 8.25 9.93016 8.21049 9.85983 8.14017C9.78951 8.06984 9.75 7.97446 9.75 7.875C9.75 7.77554 9.78951 7.68016 9.85983 7.60983C9.93016 7.53951 10.0255 7.5 10.125 7.5H17.625C17.7245 7.5 17.8198 7.53951 17.8902 7.60983C17.9605 7.68016 18 7.77554 18 7.875C18 7.97446 17.9605 8.06984 17.8902 8.14017C17.8198 8.21049 17.7245 8.25 17.625 8.25Z" />
                  <path d="M6 18C5.835 18 5.67375 17.9722 5.5215 17.9183L1.029 16.4205C0.729994 16.3218 0.469657 16.1315 0.284947 15.8765C0.100236 15.6216 0.000535999 15.3149 0 15L0 1.5C0 0.67275 0.67275 0 1.5 0C1.6665 0 1.8285 0.02775 1.97925 0.0825L6.471 1.5795C6.77013 1.67795 7.0306 1.86823 7.21534 2.12326C7.40008 2.37829 7.49969 2.68509 7.5 3V16.5C7.5 17.3272 6.82725 18 6 18ZM1.5 0.75C1.086 0.75 0.75 1.08675 0.75 1.5V15C0.750643 15.1575 0.800828 15.3107 0.893442 15.4381C0.986055 15.5654 1.1164 15.6604 1.266 15.7095L5.766 17.2095C6.258 17.3842 6.75 16.9905 6.75 16.5V3C6.74966 2.84256 6.69957 2.68925 6.60691 2.56197C6.51424 2.43469 6.38373 2.33994 6.234 2.29125L1.734 0.79125C1.65897 0.764072 1.5798 0.750116 1.5 0.75Z" />
                  <path d="M11.625 6C11.5255 6 11.4302 5.96049 11.3598 5.89016C11.2895 5.81984 11.25 5.72446 11.25 5.625V1.875C11.25 1.25475 10.7453 0.75 10.125 0.75H1.5C1.40054 0.75 1.30516 0.710491 1.23483 0.640165C1.16451 0.569839 1.125 0.474456 1.125 0.375C1.125 0.275544 1.16451 0.180161 1.23483 0.109835C1.30516 0.0395088 1.40054 0 1.5 0L10.125 0C11.1593 0 12 0.8415 12 1.875V5.625C12 5.72446 11.9605 5.81984 11.8902 5.89016C11.8198 5.96049 11.7245 6 11.625 6ZM14.625 11.25C14.5509 11.25 14.4784 11.228 14.4168 11.1868C14.3552 11.1457 14.3071 11.0872 14.2787 11.0187C14.2503 10.9503 14.2428 10.875 14.2572 10.8023C14.2716 10.7295 14.3072 10.6627 14.3595 10.6103L17.094 7.87575L14.3595 5.14125C14.2912 5.07052 14.2534 4.9758 14.2542 4.87747C14.2551 4.77915 14.2945 4.6851 14.3641 4.61557C14.4336 4.54604 14.5277 4.5066 14.626 4.50575C14.7243 4.50489 14.819 4.54269 14.8898 4.611L17.8898 7.611C17.9601 7.68132 17.9995 7.77669 17.9995 7.87613C17.9995 7.97556 17.9601 8.07093 17.8898 8.14125L14.8898 11.1412C14.8193 11.211 14.7241 11.2501 14.625 11.25Z" />
                </g>
              </svg>
              <h6 onClick={handleLogout}>Logout</h6>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSideBar;
