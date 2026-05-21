<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NextGen Airways - Premium Reservation Dashboard</title>
    <!-- Google Fonts: Outfit & Space Grotesk -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Lucide Icons via CDN -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="app-container">
        <!-- Sidebar Navigation -->
        <aside class="sidebar">
            <div class="logo-area">
                <div class="logo-glow"></div>
                <i data-lucide="plane-takeoff" class="logo-icon animate-pulse"></i>
                <div class="logo-text">
                    <span class="logo-main">NextGen</span>
                    <span class="logo-sub">Airways</span>
                </div>
            </div>
            <nav class="nav-menu">
                <a href="#dashboard" class="nav-item active" data-view="dashboard">
                    <i data-lucide="layout-dashboard"></i>
                    <span>Dashboard</span>
                </a>
                <a href="#book-flight" class="nav-item" data-view="booking">
                    <i data-lucide="ticket-plus"></i>
                    <span>Book Flight</span>
                </a>
                <a href="#my-bookings" class="nav-item" data-view="cancellation">
                    <i data-lucide="ticket-minus"></i>
                    <span>Manage Bookings</span>
                </a>
                <a href="#ticket-database" class="nav-item" data-view="database">
                    <i data-lucide="database"></i>
                    <span>Ticket Database</span>
                </a>
            </nav>
            <div class="sidebar-footer">
                <div class="system-status">
                    <span class="status-indicator online"></span>
                    <span>System Operational</span>
                </div>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="main-content">
            <!-- Top Header -->
            <header class="top-header">
                <div class="header-search">
                    <i data-lucide="search"></i>
                    <input type="text" id="global-search" placeholder="Quick search flights or tickets...">
                </div>
                <div class="header-profile">
                    <div class="notification-bell">
                        <i data-lucide="bell"></i>
                        <span class="bell-badge"></span>
                    </div>
                    <div class="avatar">
                        <span>JD</span>
                    </div>
                </div>
            </header>

            <!-- Dashboard View -->
            <section id="view-dashboard" class="content-view active">
                <div class="welcome-banner">
                    <div class="banner-overlay"></div>
                    <div class="banner-content">
                        <h1>Fly Beyond Boundaries</h1>
                        <p>Welcome back to NextGen Airways. Manage your global routes and experience the pinnacle of flight reservation.</p>
                        <button class="btn btn-primary" onclick="switchView('booking')">
                            <i data-lucide="plane"></i> Book A Flight Now
                        </button>
                    </div>
                </div>

                <!-- Live Metrics Grid -->
                <div class="metrics-grid">
                    <div class="metric-card">
                        <div class="card-glow"></div>
                        <div class="metric-icon purple">
                            <i data-lucide="users"></i>
                        </div>
                        <div class="metric-info">
                            <h3>Total Bookings</h3>
                            <p id="stat-total-bookings">0</p>
                        </div>
                    </div>
                    <div class="metric-card">
                        <div class="card-glow"></div>
                        <div class="metric-icon cyan">
                            <i data-lucide="banknote"></i>
                        </div>
                        <div class="metric-info">
                            <h3>Total Revenue</h3>
                            <p id="stat-revenue">Rs. 0</p>
                        </div>
                    </div>
                    <div class="metric-card">
                        <div class="card-glow"></div>
                        <div class="metric-icon gold">
                            <i data-lucide="globe"></i>
                        </div>
                        <div class="metric-info">
                            <h3>Active Destinations</h3>
                            <p>6 Countries</p>
                        </div>
                    </div>
                    <div class="metric-card">
                        <div class="card-glow"></div>
                        <div class="metric-icon pink">
                            <i data-lucide="percent"></i>
                        </div>
                        <div class="metric-info">
                            <h3>Average Occupancy</h3>
                            <p id="stat-occupancy">0%</p>
                        </div>
                    </div>
                </div>

                <!-- Interactive Map / Routes overview -->
                <div class="dashboard-grid">
                    <div class="grid-card route-status-card">
                        <h2>NextGen Active Fleet Status</h2>
                        <div class="table-container">
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        <th>Flight</th>
                                        <th>Destination</th>
                                        <th>Time</th>
                                        <th>Duration</th>
                                        <th>Fare</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody id="fleet-status-body">
                                    <!-- Dynamic rows loaded from javascript -->
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="grid-card quick-stats-card">
                        <h2>Destination Popularity</h2>
                        <div class="chart-container">
                            <div class="custom-progress-list" id="destination-popularity-list">
                                <!-- Dynamic progress bars -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Book Flight View (Stepper Wizard) -->
            <section id="view-booking" class="content-view">
                <div class="page-title-section">
                    <h2>Flight Reservation Wizard</h2>
                    <p>Complete the fields below to book a premium ticket on one of our global flights.</p>
                </div>

                <!-- Stepper Indicators -->
                <div class="stepper">
                    <div class="step active" id="step-ind-1">
                        <span class="step-num">1</span>
                        <span class="step-label">Passenger Info</span>
                    </div>
                    <div class="step-connector"></div>
                    <div class="step" id="step-ind-2">
                        <span class="step-num">2</span>
                        <span class="step-label">Flight Selection</span>
                    </div>
                    <div class="step-connector"></div>
                    <div class="step" id="step-ind-3">
                        <span class="step-num">3</span>
                        <span class="step-label">Seat Selector</span>
                    </div>
                    <div class="step-connector"></div>
                    <div class="step" id="step-ind-4">
                        <span class="step-num">4</span>
                        <span class="step-label">E-Ticket</span>
                    </div>
                </div>

                <!-- Wizard Steps Content -->
                <div class="wizard-container">
                    <!-- Step 1: Passenger Registration Form -->
                    <div class="wizard-step active" id="wizard-step-1">
                        <form id="passenger-form" novalidate>
                            <div class="form-grid">
                                <div class="form-group full-width">
                                    <label for="reg-id"><i data-lucide="fingerprint"></i> National ID Number (11 digits)</label>
                                    <input type="text" id="reg-id" maxlength="11" placeholder="e.g. 12345678901" required>
                                    <span class="error-msg" id="err-id"></span>
                                    <small class="form-hint">Must be exactly 11 digits, numbers only, and unique.</small>
                                </div>
                                <div class="form-group">
                                    <label for="reg-name"><i data-lucide="user"></i> Passenger Name</label>
                                    <input type="text" id="reg-name" maxlength="20" placeholder="e.g. John Doe" required>
                                    <span class="error-msg" id="err-name"></span>
                                    <small class="form-hint">Maximum 20 characters.</small>
                                </div>
                                <div class="form-group">
                                    <label for="reg-gender"><i data-lucide="venus-mars"></i> Gender</label>
                                    <select id="reg-gender" required>
                                        <option value="" disabled selected>Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="custom">Custom</option>
                                    </select>
                                    <span class="error-msg" id="err-gender"></span>
                                </div>
                                <div class="form-group">
                                    <label for="reg-age"><i data-lucide="calendar"></i> Age</label>
                                    <input type="number" id="reg-age" placeholder="e.g. 28" min="1" max="119" required>
                                    <span class="error-msg" id="err-age"></span>
                                    <small class="form-hint">Must be between 1 and 119 years.</small>
                                </div>
                                <div class="form-group">
                                    <label for="reg-passport"><i data-lucide="contact-2"></i> Passport Number</label>
                                    <input type="text" id="reg-passport" placeholder="e.g. 8493021" required>
                                    <span class="error-msg" id="err-passport"></span>
                                    <small class="form-hint">Must be digits only, at least 7 characters.</small>
                                </div>
                            </div>
                            <div class="wizard-buttons">
                                <button type="button" class="btn btn-primary" onclick="validateStep1()">
                                    Continue to Flights <i data-lucide="arrow-right"></i>
                                </button>
                            </div>
                        </form>
                    </div>

                    <!-- Step 2: Flight & Country Selection -->
                    <div class="wizard-step" id="wizard-step-2">
                        <div class="destination-grid" id="destination-cards-container">
                            <!-- Loaded Dynamically via JS -->
                        </div>

                        <!-- Sub-flights selection panel -->
                        <div class="flights-selection-panel hidden" id="flights-subpanel">
                            <h3 id="flights-country-title"><i data-lucide="plane"></i> Available Flights for Dubai</h3>
                            <div class="flights-list" id="flights-options-list">
                                <!-- Loaded Dynamically via JS -->
                            </div>
                        </div>

                        <div class="wizard-buttons">
                            <button type="button" class="btn btn-secondary" onclick="prevStep(1)">
                                <i data-lucide="arrow-left"></i> Back to Passenger Info
                            </button>
                            <button type="button" class="btn btn-primary" id="btn-to-seat" disabled onclick="continueToSeatSelection()">
                                Select Seat <i data-lucide="arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Step 3: Interactive Seat Selection -->
                    <div class="wizard-step" id="wizard-step-3">
                        <div class="seat-layout-grid">
                            <div class="cabin-container">
                                <div class="aircraft-cockpit">
                                    <span class="cockpit-text">Cockpit</span>
                                </div>
                                <div class="aircraft-cabin">
                                    <div class="seat-legend">
                                        <div class="legend-item"><span class="legend-box available"></span><span>Available</span></div>
                                        <div class="legend-item"><span class="legend-box selected"></span><span>Selected</span></div>
                                        <div class="legend-item"><span class="legend-box occupied"></span><span>Occupied</span></div>
                                    </div>
                                    <div class="seat-map" id="interactive-seat-map">
                                        <!-- Dynamically generated seats -->
                                    </div>
                                </div>
                            </div>
                            <div class="seat-details-panel">
                                <h3>Seating Information</h3>
                                <div class="selected-details-box">
                                    <div class="info-row">
                                        <span>Flight Selected:</span>
                                        <strong id="seat-details-flight">-</strong>
                                    </div>
                                    <div class="info-row">
                                        <span>Fare Class:</span>
                                        <strong id="seat-details-class">Economy</strong>
                                    </div>
                                    <div class="info-row">
                                        <span>Chosen Seat:</span>
                                        <strong id="seat-details-num" class="text-glow">-</strong>
                                    </div>
                                    <div class="info-row">
                                        <span>Ticket Base Fare:</span>
                                        <strong id="seat-details-fare">Rs. 0</strong>
                                    </div>
                                </div>
                                <p class="seat-info-note"><i data-lucide="info"></i> Emergency exit rows have extra legroom. Seat reservations are finalized upon proceeding.</p>
                            </div>
                        </div>
                        <div class="wizard-buttons">
                            <button type="button" class="btn btn-secondary" onclick="prevStep(2)">
                                <i data-lucide="arrow-left"></i> Back to Flights
                            </button>
                            <button type="button" class="btn btn-primary" id="btn-confirm-booking" disabled onclick="finalizeBooking()">
                                Finalize & Book Ticket <i data-lucide="check-circle-2"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Step 4: E-Ticket Boarding Pass -->
                    <div class="wizard-step" id="wizard-step-4">
                        <div class="ticket-celebration">
                            <i data-lucide="party-popper" class="success-icon animate-bounce"></i>
                            <h2>Booking Confirmed!</h2>
                            <p>Your ticket has been generated successfully. Your boarding pass is shown below.</p>
                        </div>

                        <!-- Boarding Pass Widget -->
                        <div class="boarding-pass" id="printable-boarding-pass">
                            <div class="pass-header">
                                <div class="pass-logo">
                                    <i data-lucide="plane-takeoff"></i>
                                    <span>NextGen Airways</span>
                                </div>
                                <div class="pass-class">BOARDING PASS</div>
                            </div>
                            <div class="pass-body">
                                <div class="pass-col-main">
                                    <div class="row">
                                        <div class="info-block">
                                            <span class="label">PASSENGER NAME</span>
                                            <span class="value" id="pass-name">-</span>
                                        </div>
                                        <div class="info-block align-right">
                                            <span class="label">NATIONAL ID</span>
                                            <span class="value" id="pass-id">-</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="info-block">
                                            <span class="label">FLIGHT NO</span>
                                            <span class="value text-glow" id="pass-flight">-</span>
                                        </div>
                                        <div class="info-block">
                                            <span class="label">DESTINATION</span>
                                            <span class="value" id="pass-destination">-</span>
                                        </div>
                                        <div class="info-block align-right">
                                            <span class="label">SEAT</span>
                                            <span class="value text-glow" id="pass-seat">-</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="info-block">
                                            <span class="label">AGE / GENDER</span>
                                            <span class="value" id="pass-age-gender">-</span>
                                        </div>
                                        <div class="info-block">
                                            <span class="label">PASSPORT NO</span>
                                            <span class="value" id="pass-passport">-</span>
                                        </div>
                                        <div class="info-block align-right">
                                            <span class="label">GATE</span>
                                            <span class="value">G-12</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="pass-col-stub">
                                    <div class="stub-header">BOARDING STUB</div>
                                    <div class="info-block">
                                        <span class="label">PASSENGER</span>
                                        <span class="value stub-small" id="pass-stub-name">-</span>
                                    </div>
                                    <div class="info-block">
                                        <span class="label">FLIGHT / SEAT</span>
                                        <span class="value stub-small text-glow" id="pass-stub-flight-seat">-</span>
                                    </div>
                                    <div class="info-block">
                                        <span class="label">DESTINATION</span>
                                        <span class="value stub-small" id="pass-stub-dest">-</span>
                                    </div>
                                    <div class="info-block">
                                        <span class="label">PRICE</span>
                                        <span class="value stub-small" id="pass-stub-price">-</span>
                                    </div>
                                    <div class="barcode-area">
                                        <div class="barcode"></div>
                                        <span class="barcode-text" id="pass-stub-barcode">NG-00000000000</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="wizard-buttons print-hidden">
                            <button type="button" class="btn btn-secondary" onclick="printBoardingPass()">
                                <i data-lucide="printer"></i> Print / Save Boarding Pass
                            </button>
                            <button type="button" class="btn btn-primary" onclick="restartBookingFlow(true)">
                                Book Another Flight <i data-lucide="user-plus"></i>
                            </button>
                            <button type="button" class="btn btn-accent" onclick="switchView('dashboard')">
                                Go to Dashboard <i data-lucide="layout-dashboard"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Manage Reservations / Cancellation View -->
            <section id="view-cancellation" class="content-view">
                <div class="page-title-section">
                    <h2>Manage Reservations</h2>
                    <p>Retrieve, review, or cancel existing flight bookings quickly using passenger details.</p>
                </div>

                <div class="cancellation-grid">
                    <!-- Retrieval Form -->
                    <div class="grid-card">
                        <h3>Search & Retrieve Ticket</h3>
                        <div class="form-group mt-4">
                            <label for="search-id"><i data-lucide="search"></i> Enter Passenger 11-digit ID</label>
                            <div class="search-input-group">
                                <input type="text" id="search-id" maxlength="11" placeholder="e.g. 12345678901">
                                <button class="btn btn-primary" onclick="searchTicket()">Search</button>
                            </div>
                            <span class="error-msg" id="err-search-id"></span>
                        </div>
                    </div>

                    <!-- Search Result Card -->
                    <div class="grid-card hidden" id="search-result-card">
                        <h3>Reservation Found</h3>
                        <div class="ticket-summary-box">
                            <div class="summary-row"><span>Passenger Name:</span><strong id="res-name">-</strong></div>
                            <div class="summary-row"><span>National ID:</span><strong id="res-id">-</strong></div>
                            <div class="summary-row"><span>Destination:</span><strong id="res-dest">-</strong></div>
                            <div class="summary-row"><span>Flight ID:</span><strong id="res-flight">-</strong></div>
                            <div class="summary-row"><span>Assigned Seat:</span><strong id="res-seat">-</strong></div>
                            <div class="summary-row"><span>Fare Charges:</span><strong id="res-charges">-</strong></div>
                            <div class="summary-row"><span>Passport No:</span><strong id="res-passport">-</strong></div>
                        </div>
                        <div class="action-buttons-row mt-4">
                            <button class="btn btn-danger" id="btn-cancel-reservation">
                                <i data-lucide="trash-2"></i> Cancel Reservation
                            </button>
                            <button class="btn btn-secondary" id="btn-print-from-search">
                                <i data-lucide="printer"></i> View Boarding Pass
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Rebook Option Modal (Simulated in UI) -->
                <div id="rebook-dialog" class="custom-dialog-backdrop hidden">
                    <div class="custom-dialog">
                        <h3>Booking Canceled Successfully</h3>
                        <p>Would you like to book another flight for this passenger using the same details?</p>
                        <div class="dialog-buttons">
                            <button class="btn btn-primary" onclick="triggerRebook(true)">Yes, Keep Details</button>
                            <button class="btn btn-secondary" onclick="triggerRebook(false)">No, Exit</button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Ticket Database View -->
            <section id="view-database" class="content-view">
                <div class="page-title-section">
                    <h2>Ticket Database</h2>
                    <p>Real-time audit log of all registered passenger reservations, seating coordinates, and revenue data.</p>
                </div>

                <div class="grid-card">
                    <!-- Filters Toolbar -->
                    <div class="toolbar">
                        <div class="filter-group">
                            <label for="db-search"><i data-lucide="search"></i> Search ID/Name</label>
                            <input type="text" id="db-search" placeholder="Type here to search..." oninput="filterDatabase()">
                        </div>
                        <div class="filter-group">
                            <label for="db-filter-dest"><i data-lucide="map-pin"></i> Destination</label>
                            <select id="db-filter-dest" onchange="filterDatabase()">
                                <option value="">All Destinations</option>
                                <option value="Dubai">Dubai</option>
                                <option value="Canada">Canada</option>
                                <option value="UK">UK</option>
                                <option value="USA">USA</option>
                                <option value="Australia">Australia</option>
                                <option value="Europe">Europe</option>
                            </select>
                        </div>
                        <button class="btn btn-secondary clear-filters-btn" onclick="clearDbFilters()">
                            Reset Filters
                        </button>
                    </div>

                    <!-- Database Table -->
                    <div class="table-container mt-4">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Passenger Name</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    <th>Passport</th>
                                    <th>Destination</th>
                                    <th>Flight</th>
                                    <th>Seat</th>
                                    <th>Fare</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="database-table-body">
                                <tr>
                                    <td colspan="10" class="text-center text-muted">No tickets booked yet.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    </div>

    <!-- Notification system toast element -->
    <div id="toast" class="toast hidden"></div>

    <script src="app.js"></script>
</body>
</html>
