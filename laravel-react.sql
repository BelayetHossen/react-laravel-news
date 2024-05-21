-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2024 at 06:34 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel-react`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `photo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `status`, `photo`, `created_at`, `updated_at`) VALUES
(3, 'সারাদেশ', 'sarades', 1, '1713945778.jpg', '2024-04-23 11:27:11', '2024-05-11 10:43:47'),
(4, 'রাজনীতি', 'rajneeti', 1, '1713945790.jpg', '2024-04-23 11:34:04', '2024-04-26 23:15:33'),
(7, 'অর্থনীতি', 'orthneeti', 1, '1714194953.jpg', '2024-04-26 23:15:53', '2024-04-26 23:15:53'),
(8, 'সম্প্রতি', 'smprti', 1, '1714195038.jpg', '2024-04-26 23:17:18', '2024-04-26 23:17:18'),
(10, 'খেলাধুলা', 'kheladhula', 1, '1714195085.jpg', '2024-04-26 23:18:05', '2024-04-26 23:18:05'),
(11, 'বিনোদন', 'binodn', 1, NULL, '2024-05-16 07:29:50', '2024-05-16 07:29:50');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `name`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Main menu', 'main-menu', 1, NULL, NULL),
(2, 'Footer menu', 'footer-menu', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `menu_items`
--

CREATE TABLE `menu_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `menu_id` int(5) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menu_items`
--

INSERT INTO `menu_items` (`id`, `menu_id`, `name`, `slug`, `link`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'সারাদেশ', 'saradesh', NULL, 1, NULL, NULL),
(9, 1, 'ggggg', 'ggggg', '#', 1, '2024-05-15 12:40:47', '2024-05-15 12:40:47'),
(10, 1, 'অর্থনীতি', 'orthneeti', NULL, 1, '2024-05-16 02:41:41', '2024-05-16 02:41:41');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_03_24_163910_create_permissions_table', 1),
(5, '2024_03_24_190703_create_personal_access_tokens_table', 1),
(6, '2024_03_26_175026_create_roles_table', 1),
(7, '2024_03_27_172617_create_admins_table', 1),
(8, '2024_04_23_081405_create_categories_table', 1),
(9, '2024_04_23_154455_create_sub_categories_table', 1),
(10, '2024_04_23_154506_create_sub_sub_categories_table', 1),
(11, '2024_04_29_075651_create_posts_table', 2),
(12, '2024_05_11_172330_create_tags_table', 3),
(13, '2024_05_15_065402_create_menus_table', 4),
(14, '2024_05_15_065418_create_menu_items_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Dashboard', 'dashboard', 1, '2024-04-23 09:48:44', '2024-04-23 09:48:44'),
(2, 'Users', 'users', 1, '2024-04-23 09:48:44', '2024-04-23 09:48:44'),
(3, 'Settings', 'settings', 1, '2024-04-23 09:48:44', '2024-05-14 07:47:14'),
(4, 'Posts', 'posts', 1, '2024-05-14 07:47:42', '2024-05-14 07:47:42');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'mytoken', '9b1a16016054211ecfce551c284528402e069413103870dc16a261cd34b6a1b6', '[\"*\"]', '2024-05-16 10:13:35', NULL, '2024-04-23 09:50:16', '2024-05-16 10:13:35');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `sub_category_id` int(11) DEFAULT NULL,
  `sub_sub_category_id` int(11) DEFAULT NULL,
  `description` longtext NOT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `tags` text DEFAULT NULL,
  `popular_count` int(255) NOT NULL DEFAULT 0,
  `photo` varchar(255) DEFAULT NULL,
  `trash` tinyint(1) NOT NULL DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `slug`, `category_id`, `sub_category_id`, `sub_sub_category_id`, `description`, `meta_title`, `meta_description`, `tags`, `popular_count`, `photo`, `trash`, `status`, `created_at`, `updated_at`) VALUES
(5, 'This is title', 'this-is-title', 3, 3, 3, '<p>This is long description</p>', 'This is mets title', NULL, NULL, 4, '1714592294.webp', 0, 1, '2024-05-01 11:13:31', '2024-05-12 02:18:27'),
(6, 'মাঠে নেমেই ৫ উইকেট নিলেন মাশরাফি', 'mathe-nemei-5-uiket-nilen-masrafi', 3, 3, 4, '<p>ঢাকা প্রিমিয়ার লিগে প্রথম ম্যাচ খেলতে নেমেই ৫ উইকেট নিলেন মাশরাফি বিন মর্তুজা। তার বিধ্বংসী বোলিংয়ে গাজী গ্রুপ ক্রিকেটার্সকে ১৩৬ রানে গুটিয়ে দিয়েছে লেজেন্ডস অব রূপগঞ্জ। এর আগে গত বিপিএলে সিলেট স্ট্রাইকার্সের হয়ে প্রথম পাঁচ ম্যাচ খেলার পর টুর্নামেন্ট থেকে বিরতি নেন মাশরাফি। আসরটিতে আর ফেরাও হয়নি তার। এরপর ঢাকা প্রিমিয়ার লিগে রূপগঞ্জের হয়ে নাম লেখালেও প্রথম তিন ম্যাচ খেলতে পারেননি। আজ বৃহস্পতিবার বিকেএসপির ৩ নম্বর মাঠে চতুর্থ রাউন্ডে খেলতে নামে দুদল। যেখানে টানা ৮ ওভারের স্পেলে ১৯ রানে ৫ উইকেট শিকার করেন মাশরাফি। লিস্ট \'এ\' ক্রিকেটে তার অষ্টম ৫ উইকেট এটি। বাংলাদেশের বোলারদের মধ্যে মাশরাফির চেয়ে বেশি ৫ উইকেট আছে কেবল আব্দুর রাজ্জাকের (৯টি)। দলীয় একাদশ ওভারে মাশরাফি আক্রমণে আসেন। প্রথম ওভারের পঞ্চম বলে দ্বিতীয় উইকেটে ৪০ রানের জুটি গড়া প্রিতম কুমার ও আনিসুল ইসলাম পার্টনারশিপ ভাঙেন। প্রিতমকে ক্যাচে ফেরান তিনি। এরপর নিজের চতুর্থ ওভারে ২ উইকেট নেন মাশরাফি। প্রথমে সাব্বির হোসেন শিকদার উইকেটের পেছনে ক্যাচ দেন। এক বল পর লেগ স্টাম্পের বাইরের ডেলিভারিতে উইকেটের পেছনে ক্যাচ দেন ফয়সাল আহমেদ। মইন খান মাশরাফির পরের ওভারে উড়িয়ে মারার চেষ্টায় ডিপ কভারে ধরা পড়েন। পরে শর্ট বলে পুল করে মিড উইকেটে ক্যাচ দেন মাহফুজুর রহমান রাব্বি। ৫ উইকেট শিকার হয় মাশরাফির। এদিন ইনিংসের ৮৭ বল বাকি থাকতেই অলআউট হয়েছে গাজী গ্রুপ। রূপগঞ্জের হয়ে আব্দুল হালিম নেন ২ উইকেট। আনিসুল গাজী গ্রুপের হয়ে সর্বোচ্চ ৪১ রান করেন।</p><p>ঢাকা প্রিমিয়ার লিগে প্রথম ম্যাচ খেলতে নেমেই ৫ উইকেট নিলেন মাশরাফি বিন মর্তুজা। তার বিধ্বংসী বোলিংয়ে গাজী গ্রুপ ক্রিকেটার্সকে ১৩৬ রানে গুটিয়ে দিয়েছে লেজেন্ডস অব রূপগঞ্জ। এর আগে গত বিপিএলে সিলেট স্ট্রাইকার্সের হয়ে প্রথম পাঁচ ম্যাচ খেলার পর টুর্নামেন্ট থেকে বিরতি নেন মাশরাফি। আসরটিতে আর ফেরাও হয়নি তার। এরপর ঢাকা প্রিমিয়ার লিগে রূপগঞ্জের হয়ে নাম লেখালেও প্রথম তিন ম্যাচ খেলতে পারেননি। আজ বৃহস্পতিবার বিকেএসপির ৩ নম্বর মাঠে চতুর্থ রাউন্ডে খেলতে নামে দুদল। যেখানে টানা ৮ ওভারের স্পেলে ১৯ রানে ৫ উইকেট শিকার করেন মাশরাফি। লিস্ট \'এ\' ক্রিকেটে তার অষ্টম ৫ উইকেট এটি। বাংলাদেশের বোলারদের মধ্যে মাশরাফির চেয়ে বেশি ৫ উইকেট আছে কেবল আব্দুর রাজ্জাকের (৯টি)। দলীয় একাদশ ওভারে মাশরাফি আক্রমণে আসেন। প্রথম ওভারের পঞ্চম বলে দ্বিতীয় উইকেটে ৪০ রানের জুটি গড়া প্রিতম কুমার ও আনিসুল ইসলাম পার্টনারশিপ ভাঙেন। প্রিতমকে ক্যাচে ফেরান তিনি। এরপর নিজের চতুর্থ ওভারে ২ উইকেট নেন মাশরাফি। প্রথমে সাব্বির হোসেন শিকদার উইকেটের পেছনে ক্যাচ দেন। এক বল পর লেগ স্টাম্পের বাইরের ডেলিভারিতে উইকেটের পেছনে ক্যাচ দেন ফয়সাল আহমেদ। মইন খান মাশরাফির পরের ওভারে উড়িয়ে মারার চেষ্টায় ডিপ কভারে ধরা পড়েন। পরে শর্ট বলে পুল করে মিড উইকেটে ক্যাচ দেন মাহফুজুর রহমান রাব্বি। ৫ উইকেট শিকার হয় মাশরাফির। এদিন ইনিংসের ৮৭ বল বাকি থাকতেই অলআউট হয়েছে গাজী গ্রুপ। রূপগঞ্জের হয়ে আব্দুল হালিম নেন ২ উইকেট। আনিসুল গাজী গ্রুপের হয়ে সর্বোচ্চ ৪১ রান করেন।</p>', NULL, NULL, NULL, 8, '1714588953.webp', 0, 1, '2024-05-01 12:42:33', '2024-05-12 02:18:20'),
(7, 'This is third post', 'this-is-third-post', 3, 3, 3, '<p>This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post </p><p>This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post This is third post </p>', NULL, NULL, '[\"Trending\",\"New news\"]', 2, '1715452048.webp', 0, 1, '2024-05-11 12:27:28', '2024-05-16 04:06:15');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `permissions` text DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `slug`, `permissions`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin', '[\"Dashboard\",\"Users\",\"Posts\",\"Settings\"]', 1, '2024-04-23 09:48:44', '2024-05-14 07:48:16'),
(2, 'Editor', 'editor', '[\"Dashboard\",\"Users\"]', 1, '2024-04-23 09:48:44', '2024-04-23 09:48:44'),
(3, 'Moderator', 'moderator', '[\"Dashboard\",\"Users\"]', 1, '2024-04-23 09:48:44', '2024-04-23 09:48:44'),
(4, 'User', 'user', '[\"Dashboard\",\"Users\"]', 1, '2024-04-23 09:48:44', '2024-04-23 09:48:44');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('uQnxtsR0N7SZqu5tTV9fSZCQcUEeqGugiYcOURf2', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMzBvQzFkT0htRXZ5Y1VHMXl0Zk5pYTVhVmxGa0NYNXl5SnJyMWd0VCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjM6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXNoYm9hcmQvcG9zdC9kaXN0L2ltZy91c2VyMy0xMjh4MTI4LmpwZyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1715876015);

-- --------------------------------------------------------

--
-- Table structure for table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `photo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sub_categories`
--

INSERT INTO `sub_categories` (`id`, `name`, `slug`, `category_id`, `status`, `photo`, `created_at`, `updated_at`) VALUES
(3, 'রাজশাহী', 'rajsahee', 3, 1, '1714242669.jpg', '2024-04-27 12:31:09', '2024-04-27 12:31:09'),
(4, 'ঢাকা', 'dhaka', 3, 1, '1714242699.jpg', '2024-04-27 12:31:39', '2024-04-27 12:31:39');

-- --------------------------------------------------------

--
-- Table structure for table `sub_sub_categories`
--

CREATE TABLE `sub_sub_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `sub_category_id` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `photo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sub_sub_categories`
--

INSERT INTO `sub_sub_categories` (`id`, `name`, `slug`, `category_id`, `sub_category_id`, `status`, `photo`, `created_at`, `updated_at`) VALUES
(2, 'বাগমারা', 'bagmara', 3, 3, 1, '1714242738.jpg', '2024-04-27 12:32:18', '2024-04-27 12:32:18'),
(3, 'পুঠিয়া', 'puthiya', 3, 3, 1, '1714242765.jpg', '2024-04-27 12:32:45', '2024-04-27 12:32:45'),
(4, 'ধামরাই', 'dhamrai', 3, 4, 1, '1714242790.jpg', '2024-04-27 12:33:10', '2024-04-27 12:33:10');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `name`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(2, 'Top news', 'top-news', 1, '2024-05-11 12:17:36', '2024-05-11 12:17:36'),
(3, 'Trending', 'trending', 1, '2024-05-11 12:18:24', '2024-05-11 12:18:24'),
(4, 'New news', 'new-news', 1, '2024-05-11 12:20:46', '2024-05-11 12:20:46');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `email`, `phone`, `username`, `gender`, `email_verified_at`, `role_id`, `photo`, `password`, `status`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'User', 'admin@gmail.com', '01788036222', 'admin', 'Male', NULL, 1, NULL, '$2y$12$9wPBoJ3eGm5Lr4/X7v.SEuKAodVtAb3KYaS8T.JNGIC0sUozfjeDW', 1, NULL, '2024-04-23 09:48:44', '2024-04-23 09:48:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admins_role_id_foreign` (`role_id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_name_unique` (`name`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `menus_name_unique` (`name`),
  ADD UNIQUE KEY `menus_slug_unique` (`slug`);

--
-- Indexes for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `menu_items_name_unique` (`name`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_unique` (`name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `posts_slug_unique` (`slug`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sub_categories_name_unique` (`name`),
  ADD UNIQUE KEY `sub_categories_slug_unique` (`slug`);

--
-- Indexes for table `sub_sub_categories`
--
ALTER TABLE `sub_sub_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sub_sub_categories_name_unique` (`name`),
  ADD UNIQUE KEY `sub_sub_categories_slug_unique` (`slug`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tags_name_unique` (`name`),
  ADD UNIQUE KEY `tags_slug_unique` (`slug`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `menu_items`
--
ALTER TABLE `menu_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sub_sub_categories`
--
ALTER TABLE `sub_sub_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admins`
--
ALTER TABLE `admins`
  ADD CONSTRAINT `admins_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
