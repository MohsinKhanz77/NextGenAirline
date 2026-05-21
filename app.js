/* ==========================================================================
   NextGen Airways - Premium Application Engine (ES6 Javascript)
   ========================================================================== */

// --- Dynamic Databases ---
const countries = [
    { id: "dubai", name: "Dubai", icon: "plane", desc: "Glittering skylines, luxury shopping, and ultramodern architecture." },
    { id: "canada", name: "Canada", icon: "snowflake", desc: "Majestic national parks, wild maple forests, and clean cities." },
    { id: "uk", name: "UK", icon: "crown", desc: "Historic castles, cozy pubs, and the iconic streets of London." },
    { id: "usa", name: "USA", icon: "landmark", desc: "Sprawling metropolises, national landmarks, and golden beaches." },
    { id: "australia", name: "Australia", icon: "sun", desc: "Stunning coral reefs, unique wildlife, and famous harbor fronts." },
    { id: "europe", name: "Europe", icon: "compass", desc: "Historic art capitals, delicious cuisines, and romance." }
];

const flightsDb = {
    "Dubai": [
        { id: "DUB - 498", date: "08-01-2022", time: "8:00 AM", duration: "10 hrs", price: 14000, status: "boarding" },
        { id: "DUB - 658", date: "09-01-2022", time: "4:00 AM", duration: "12 hrs", price: 10000, status: "on-time" },
        { id: "DUB - 508", date: "11-01-2022", time: "11:00 AM", duration: "11 hrs", price: 9000, status: "on-time" }
    ],
    "Canada": [
        { id: "CA - 198", date: "09-01-2022", time: "2:00 PM", duration: "20 hrs", price: 34000, status: "on-time" },
        { id: "CA - 158", date: "11-01-2022", time: "6:00 AM", duration: "23 hrs", price: 29000, status: "delayed" },
        { id: "CA - 208", date: "14-01-2022", time: "12:00 AM", duration: "21 hrs", price: 40000, status: "on-time" }
    ],
    "UK": [
        { id: "UK - 798", date: "12-01-2022", time: "10:00 AM", duration: "14 hrs", price: 44000, status: "on-time" }
    ],
    "USA": [
        { id: "US - 567", date: "10-01-2022", time: "9:00 AM", duration: "22 hrs", price: 37000, status: "boarding" },
        { id: "US - 658", date: "09-01-2022", time: "6:00 AM", duration: "22 hrs", price: 39000, status: "on-time" },
        { id: "US - 508", date: "12-01-2022", time: "10:00 AM", duration: "21 hrs", price: 42000, status: "on-time" }
    ],
    "Australia": [
        { id: "AS - 698", date: "18-01-2022", time: "9:00 AM", duration: "20 hrs", price: 44000, status: "on-time" },
        { id: "AS - 158", date: "19-01-2022", time: "4:00 AM", duration: "22 hrs", price: 34000, status: "delayed" },
        { id: "AS - 708", date: "17-01-2022", time: "10:00 AM", duration: "21 hrs", price: 42000, status: "on-time" }
    ],
    "Europe": [
        { id: "EU - 898", date: "02-01-2022", time: "2:00 AM", duration: "18 hrs", price: 36000, status: "boarding" },
        { id: "EU - 958", date: "03-01-2022", time: "6:00 AM", duration: "19 hrs", price: 37000, status: "on-time" },
        { id: "EU - 608", date: "12-01-2022", time: "10:00 AM", duration: "20 hrs", price: 31000, status: "on-time" }
    ]
};

// --- App State ---
let bookingState = {
    currentStep: 1,
    passenger: {
        id: "",
        name: "",
        gender: "",
        age: null,
        passportNo: ""
    },
    flight: null, // object
    destination: "",
    selectedSeat: null
};

// Seating setup: 10 rows (1 to 10), columns A, B, C, D, E, F
// Store static/mock seat occupancy by flight ID to simulate real environment
let occupiedSeatsDb = {};

// --- Initialize App ---
document.addEventListener("DOMContentLoaded", () => {
    // Initialize icons
    lucide.createIcons();

    // Check LocalStorage for reservations
    if (!localStorage.getItem("nextgen_users")) {
        localStorage.setItem("nextgen_users", JSON.stringify([]));
    }

    // Seed occupied seats database
    generateMockOccupiedSeats();

    // Setup SPA navigation
    setupNavigation();

    // Initialize Dashboard stats & layouts
    updateDashboardStats();
    renderFleetStatus();
    renderPopularityChart();

    // Initialize Stepper view layouts
    renderDestinationCards();

    // Initialize card hover glow effects
    setupGlowEffects();
});

// Setup navigation listener
function setupNavigation() {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");
            const targetView = item.getAttribute("data-view");
            switchView(targetView);
        });
    });
}

// Switch SPA screens
function switchView(viewId) {
    const views = document.querySelectorAll(".content-view");
    views.forEach(view => view.classList.remove("active"));
    
    // Convert mapping
    let actualViewId = "view-dashboard";
    if (viewId === "dashboard") actualViewId = "view-dashboard";
    else if (viewId === "booking") actualViewId = "view-booking";
    else if (viewId === "cancellation") actualViewId = "view-cancellation";
    else if (viewId === "database") actualViewId = "view-database";
    
    document.getElementById(actualViewId).classList.add("active");

    // Side navigation active sync
    const navItems = document.querySelectorAll(".sidebar .nav-item");
    navItems.forEach(item => {
        if (item.getAttribute("data-view") === viewId) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Reset fields if coming back to dashboard/view databases
    if (viewId === "database") {
        renderDatabaseTable();
    }
}

// Card glow hover effect
function setupGlowEffects() {
    document.addEventListener("mousemove", (e) => {
        const cards = document.querySelectorAll(".metric-card, .grid-card, .dest-card");
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);
        });
    });
}

// Seed seat bookings to make it realistic
function generateMockOccupiedSeats() {
    // For each flight, mark 3-8 seats as occupied
    Object.keys(flightsDb).forEach(country => {
        flightsDb[country].forEach(flight => {
            const occupied = [];
            const cols = ["A", "B", "C", "D", "E", "F"];
            const count = Math.floor(Math.random() * 8) + 4; // 4 to 11 seats occupied
            for (let i = 0; i < count; i++) {
                const row = Math.floor(Math.random() * 10) + 1;
                const col = cols[Math.floor(Math.random() * 6)];
                const seatCode = `${row}${col}`;
                if (!occupied.includes(seatCode)) {
                    occupied.push(seatCode);
                }
            }
            occupiedSeatsDb[flight.id] = occupied;
        });
    });
}

// Get reservations from LocalStorage
function getReservations() {
    return JSON.parse(localStorage.getItem("nextgen_users")) || [];
}

// Save reservations to LocalStorage
function saveReservations(resList) {
    localStorage.setItem("nextgen_users", JSON.stringify(resList));
}

// Check if Passenger ID is already booked
function userIdExists(id) {
    const reservations = getReservations();
    return reservations.some(res => res.id === id);
}

// Input Helpers
function isDigits(str) {
    return /^\d+$/.test(str);
}

// Toast notification trigger
function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i data-lucide="${type === 'success' ? 'check-circle' : type === 'error' ? 'alert-triangle' : 'info'}"></i> <span>${message}</span>`;
    lucide.createIcons();
    toast.classList.remove("hidden");
    
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 4000);
}

// --- Dashboard View Operations ---
function updateDashboardStats() {
    const bookings = getReservations();
    document.getElementById("stat-total-bookings").innerText = bookings.length;
    
    const revenue = bookings.reduce((sum, b) => sum + b.charges, 0);
    document.getElementById("stat-revenue").innerText = `Rs. ${revenue.toLocaleString()}`;

    // Occupancy calculation: total flight capacities = 10 rows * 6 seats * total flights count (14 flights)
    const totalFlights = 14;
    const capacity = totalFlights * 60;
    // Calculate total occupied (mock occupied seats + actual booked seats)
    let totalOccupiedCount = bookings.length;
    Object.keys(occupiedSeatsDb).forEach(fId => {
        totalOccupiedCount += occupiedSeatsDb[fId].length;
    });

    const occupancyPct = Math.min(Math.round((totalOccupiedCount / capacity) * 100), 100);
    document.getElementById("stat-occupancy").innerText = `${occupancyPct}%`;
}

function renderFleetStatus() {
    const body = document.getElementById("fleet-status-body");
    body.innerHTML = "";
    
    // Display first 4 flights for clean presentation
    let count = 0;
    Object.keys(flightsDb).forEach(country => {
        flightsDb[country].forEach(f => {
            if (count < 4) {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td><strong class="text-glow">${f.id}</strong></td>
                    <td>${country}</td>
                    <td>${f.date} | ${f.time}</td>
                    <td>${f.duration}</td>
                    <td>Rs. ${f.price.toLocaleString()}</td>
                    <td><span class="status-badge ${f.status}">${f.status.replace("-", " ")}</span></td>
                `;
                body.appendChild(tr);
                count++;
            }
        });
    });
}

function renderPopularityChart() {
    const container = document.getElementById("destination-popularity-list");
    container.innerHTML = "";

    const bookings = getReservations();
    
    // Group bookings by destination
    const counts = { Dubai: 0, Canada: 0, UK: 0, USA: 0, Australia: 0, Europe: 0 };
    bookings.forEach(b => {
        if (counts.hasOwnProperty(b.destination)) {
            counts[b.destination]++;
        }
    });

    // Add some base values so the dashboard always has active charts
    const basePcts = { Dubai: 45, Canada: 28, UK: 12, USA: 62, Australia: 35, Europe: 50 };

    Object.keys(basePcts).forEach(country => {
        const actualCount = counts[country];
        const displayPct = Math.min(basePcts[country] + (actualCount * 12), 100);
        
        const div = document.createElement("div");
        div.className = "progress-item";
        div.innerHTML = `
            <div class="progress-label-row">
                <span class="progress-name">${country}</span>
                <span class="progress-pct">${displayPct}% Popularity</span>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: 0%"></div>
            </div>
        `;
        container.appendChild(div);

        // Animate fill bar
        setTimeout(() => {
            div.querySelector(".progress-bar-fill").style.width = `${displayPct}%`;
        }, 150);
    });
}


// --- Stepper Booking Wizard Operations ---

// Step 1: Form Validation
function validateStep1() {
    let isValid = true;
    
    // Inputs & Errors
    const idInput = document.getElementById("reg-id");
    const nameInput = document.getElementById("reg-name");
    const genderSelect = document.getElementById("reg-gender");
    const ageInput = document.getElementById("reg-age");
    const passportInput = document.getElementById("reg-passport");

    const errId = document.getElementById("err-id");
    const errName = document.getElementById("err-name");
    const errGender = document.getElementById("err-gender");
    const errAge = document.getElementById("err-age");
    const errPassport = document.getElementById("err-passport");

    // Clean states
    idInput.classList.remove("invalid");
    nameInput.classList.remove("invalid");
    genderSelect.classList.remove("invalid");
    ageInput.classList.remove("invalid");
    passportInput.classList.remove("invalid");

    errId.innerText = "";
    errName.innerText = "";
    errGender.innerText = "";
    errAge.innerText = "";
    errPassport.innerText = "";

    // ID Validation (Exactly 11 digits, unique, numbers only)
    const idVal = idInput.value.trim();
    if (!idVal) {
        idInput.classList.add("invalid");
        errId.innerText = "National ID is required.";
        isValid = false;
    } else if (!isDigits(idVal) || idVal.length !== 11) {
        idInput.classList.add("invalid");
        errId.innerText = "Invalid ID format. Must be exactly 11 digits.";
        isValid = false;
    } else if (userIdExists(idVal)) {
        idInput.classList.add("invalid");
        errId.innerText = "This National ID already has an active reservation.";
        isValid = false;
    }

    // Name Validation (Up to 20 characters)
    const nameVal = nameInput.value.trim();
    if (!nameVal) {
        nameInput.classList.add("invalid");
        errName.innerText = "Passenger Name is required.";
        isValid = false;
    } else if (nameVal.length > 20) {
        nameInput.classList.add("invalid");
        errName.innerText = "Name cannot exceed 20 characters.";
        isValid = false;
    }

    // Gender Validation (male, female, custom)
    const genderVal = genderSelect.value;
    if (!genderVal) {
        genderSelect.classList.add("invalid");
        errGender.innerText = "Please select a gender option.";
        isValid = false;
    }

    // Age Validation (positive, < 120)
    const ageVal = parseInt(ageInput.value);
    if (isNaN(ageVal)) {
        ageInput.classList.add("invalid");
        errAge.innerText = "Age is required.";
        isValid = false;
    } else if (ageVal <= 0 || ageVal >= 120) {
        ageInput.classList.add("invalid");
        errAge.innerText = "Age must be a positive number less than 120.";
        isValid = false;
    }

    // Passport Validation (At least 7 digits, digits only)
    const passportVal = passportInput.value.trim();
    if (!passportVal) {
        passportInput.classList.add("invalid");
        errPassport.innerText = "Passport number is required.";
        isValid = false;
    } else if (!isDigits(passportVal) || passportVal.length < 7) {
        passportInput.classList.add("invalid");
        errPassport.innerText = "Passport must contain only numbers, minimum 7 digits.";
        isValid = false;
    }

    if (isValid) {
        // Save to state
        bookingState.passenger = {
            id: idVal,
            name: nameVal,
            gender: genderVal,
            age: ageVal,
            passportNo: passportVal
        };

        showToast("Passenger details validated successfully.", "success");
        nextStep(2);
    } else {
        showToast("Please correct the highlighted errors.", "error");
    }
}

// Stepper navigation
function nextStep(stepNum) {
    // Hide all steps
    document.querySelectorAll(".wizard-step").forEach(s => s.classList.remove("active"));
    // Show target step
    document.getElementById(`wizard-step-${stepNum}`).classList.add("active");

    // Stepper header sync
    document.querySelectorAll(".stepper .step").forEach((step, idx) => {
        const stepIndex = idx + 1;
        step.classList.remove("active", "completed");
        if (stepIndex === stepNum) {
            step.classList.add("active");
        } else if (stepIndex < stepNum) {
            step.classList.add("completed");
        }
    });

    bookingState.currentStep = stepNum;
}

function prevStep(stepNum) {
    nextStep(stepNum);
}

// Render Step 2: Destination country cards
function renderDestinationCards() {
    const container = document.getElementById("destination-cards-container");
    container.innerHTML = "";

    countries.forEach(country => {
        const card = document.createElement("div");
        card.className = "dest-card";
        card.setAttribute("data-id", country.name);
        card.innerHTML = `
            <div class="card-glow"></div>
            <i data-lucide="${country.icon}"></i>
            <h4>Flight to ${country.name}</h4>
            <p>${country.desc}</p>
        `;
        card.addEventListener("click", () => selectDestination(country.name, card));
        container.appendChild(card);
    });
    lucide.createIcons();
    setupGlowEffects();
}

function selectDestination(countryName, cardEl) {
    // Highlight Card
    document.querySelectorAll(".dest-card").forEach(c => c.classList.remove("selected"));
    cardEl.classList.add("selected");

    bookingState.destination = countryName;
    bookingState.flight = null;
    document.getElementById("btn-to-seat").disabled = true;

    // Load available flights list
    const flightsPanel = document.getElementById("flights-subpanel");
    const flightsTitle = document.getElementById("flights-country-title");
    const optionsList = document.getElementById("flights-options-list");

    flightsTitle.innerHTML = `<i data-lucide="plane"></i> Available Flights for ${countryName}`;
    optionsList.innerHTML = "";

    const availableFlights = flightsDb[countryName] || [];
    availableFlights.forEach(f => {
        const item = document.createElement("div");
        item.className = "flight-option-card";
        item.innerHTML = `
            <div class="flight-meta">
                <div class="flight-code-box">
                    <span class="flight-code">${f.id}</span>
                    <span class="flight-duration">${f.duration} Flight</span>
                </div>
                <div class="flight-schedule">
                    <span class="flight-datetime">${f.date} at ${f.time}</span>
                    <span class="flight-route">Direct Service</span>
                </div>
            </div>
            <div class="flight-fare">
                <span class="fare-amount">Rs. ${f.price.toLocaleString()}</span>
                <span class="fare-tax">incl. taxes & fees</span>
            </div>
        `;
        item.addEventListener("click", () => selectFlightOption(f, item));
        optionsList.appendChild(item);
    });

    flightsPanel.classList.remove("hidden");
    lucide.createIcons();
    
    // Auto-scroll to flights list
    flightsPanel.scrollIntoView({ behavior: 'smooth' });
}

function selectFlightOption(flightObj, element) {
    document.querySelectorAll(".flight-option-card").forEach(el => el.classList.remove("selected"));
    element.classList.add("selected");

    bookingState.flight = flightObj;
    document.getElementById("btn-to-seat").disabled = false;
}

// Step 3 Seat Selector Navigation
function continueToSeatSelection() {
    if (!bookingState.flight) return;
    
    // Update labels in Seating pane
    document.getElementById("seat-details-flight").innerText = bookingState.flight.id;
    document.getElementById("seat-details-fare").innerText = `Rs. ${bookingState.flight.price.toLocaleString()}`;
    document.getElementById("seat-details-num").innerText = "-";
    bookingState.selectedSeat = null;
    document.getElementById("btn-confirm-booking").disabled = true;

    // Render interactive plane seats
    renderSeatMap();
    nextStep(3);
}

function renderSeatMap() {
    const seatMap = document.getElementById("interactive-seat-map");
    seatMap.innerHTML = "";

    const cols = ["A", "B", "C", "D", "E", "F"];
    const flightId = bookingState.flight.id;
    const occupiedSeats = occupiedSeatsDb[flightId] || [];

    // Render 10 Rows
    for (let r = 1; r <= 10; r++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "seat-row";

        // Row number label (left)
        const rowLabelLeft = document.createElement("span");
        rowLabelLeft.className = "row-num";
        rowLabelLeft.innerText = r;
        rowDiv.appendChild(rowLabelLeft);

        // Group ABC
        const groupABC = document.createElement("div");
        groupABC.className = "seat-group";
        for (let c = 0; c < 3; c++) {
            const seatCode = `${r}${cols[c]}`;
            const isOccupied = occupiedSeats.includes(seatCode);
            const seat = createSeatEl(seatCode, isOccupied);
            groupABC.appendChild(seat);
        }
        rowDiv.appendChild(groupABC);

        // Aisle space
        const aisle = document.createElement("div");
        aisle.className = "seat-aisle";
        rowDiv.appendChild(aisle);

        // Group DEF
        const groupDEF = document.createElement("div");
        groupDEF.className = "seat-group";
        for (let c = 3; c < 6; c++) {
            const seatCode = `${r}${cols[c]}`;
            const isOccupied = occupiedSeats.includes(seatCode);
            const seat = createSeatEl(seatCode, isOccupied);
            groupDEF.appendChild(seat);
        }
        rowDiv.appendChild(groupDEF);

        // Row number label (right)
        const rowLabelRight = document.createElement("span");
        rowLabelRight.className = "row-num";
        rowLabelRight.innerText = r;
        rowDiv.appendChild(rowLabelRight);

        seatMap.appendChild(rowDiv);
    }
}

function createSeatEl(seatCode, isOccupied) {
    const seat = document.createElement("div");
    seat.className = `seat ${isOccupied ? 'occupied' : 'available'}`;
    seat.innerText = seatCode;

    if (!isOccupied) {
        seat.addEventListener("click", () => {
            // Remove previous selected seat
            document.querySelectorAll(".seat.selected").forEach(s => s.classList.remove("selected"));
            
            // Mark new selection
            seat.classList.add("selected");
            bookingState.selectedSeat = seatCode;
            document.getElementById("seat-details-num").innerText = seatCode;

            // Enable finalize button
            document.getElementById("btn-confirm-booking").disabled = false;
        });
    }
    return seat;
}

// Step 4 Finalize Booking
function finalizeBooking() {
    if (!bookingState.selectedSeat) return;

    // Bundle new reservation object
    const finalUser = {
        id: bookingState.passenger.id,
        name: bookingState.passenger.name,
        gender: bookingState.passenger.gender,
        age: bookingState.passenger.age,
        passportNo: bookingState.passenger.passportNo,
        flight: bookingState.flight.id,
        destination: bookingState.destination,
        seat: bookingState.selectedSeat,
        charges: bookingState.flight.price
    };

    // Save to Database (LocalStorage)
    const bookings = getReservations();
    bookings.push(finalUser);
    saveReservations(bookings);

    // Add selected seat to occupied database in memory
    const flightId = bookingState.flight.id;
    if (!occupiedSeatsDb[flightId]) occupiedSeatsDb[flightId] = [];
    occupiedSeatsDb[flightId].push(bookingState.selectedSeat);

    // Populate Boarding Pass UI
    document.getElementById("pass-name").innerText = finalUser.name;
    document.getElementById("pass-id").innerText = finalUser.id;
    document.getElementById("pass-flight").innerText = finalUser.flight;
    document.getElementById("pass-destination").innerText = finalUser.destination;
    document.getElementById("pass-seat").innerText = finalUser.seat;
    document.getElementById("pass-age-gender").innerText = `${finalUser.age} Yrs / ${finalUser.gender.toUpperCase()}`;
    document.getElementById("pass-passport").innerText = finalUser.passportNo;

    // Boarding Pass Stub Elements
    document.getElementById("pass-stub-name").innerText = finalUser.name;
    document.getElementById("pass-stub-flight-seat").innerText = `${finalUser.flight} / ${finalUser.seat}`;
    document.getElementById("pass-stub-dest").innerText = finalUser.destination;
    document.getElementById("pass-stub-price").innerText = `Rs. ${finalUser.charges.toLocaleString()}`;
    document.getElementById("pass-stub-barcode").innerText = `NG-${finalUser.id}`;

    showToast(`Flight ticket booked successfully on seat ${finalUser.seat}!`, "success");
    
    // Update Stats
    updateDashboardStats();
    renderPopularityChart();

    nextStep(4);
}

// Print trigger (uses browser print window configured via styles.css print queries)
function printBoardingPass() {
    window.print();
}

// Reset and restart booking wizard
function restartBookingFlow(keepDetails = false) {
    if (keepDetails) {
        // Retain ID, Name, Gender, Age, Passport but reset flight selections
        bookingState.flight = null;
        bookingState.selectedSeat = null;
        document.getElementById("btn-to-seat").disabled = true;
        document.getElementById("btn-confirm-booking").disabled = true;
        
        // Remove class select states
        document.querySelectorAll(".dest-card").forEach(c => c.classList.remove("selected"));
        document.getElementById("flights-subpanel").classList.add("hidden");

        showToast("Booking context updated with previous passenger profile.", "info");
        nextStep(2);
    } else {
        // Complete clear
        bookingState = {
            currentStep: 1,
            passenger: { id: "", name: "", gender: "", age: null, passportNo: "" },
            flight: null,
            destination: "",
            selectedSeat: null
        };
        
        document.getElementById("passenger-form").reset();
        document.getElementById("btn-to-seat").disabled = true;
        document.getElementById("btn-confirm-booking").disabled = true;
        document.querySelectorAll(".dest-card").forEach(c => c.classList.remove("selected"));
        document.getElementById("flights-subpanel").classList.add("hidden");

        nextStep(1);
    }
}


// --- Manage Reservations / Cancellation View Operations ---

function searchTicket() {
    const input = document.getElementById("search-id");
    const err = document.getElementById("err-search-id");
    const resultCard = document.getElementById("search-result-card");
    const searchId = input.value.trim();

    err.innerText = "";
    resultCard.classList.add("hidden");

    if (!searchId) {
        err.innerText = "Please enter passenger National ID.";
        input.classList.add("invalid");
        return;
    }

    if (!isDigits(searchId) || searchId.length !== 11) {
        err.innerText = "Invalid ID formats. Must be exactly 11 digits.";
        input.classList.add("invalid");
        return;
    }

    input.classList.remove("invalid");

    const reservations = getReservations();
    const ticket = reservations.find(res => res.id === searchId);

    if (ticket) {
        // Load details
        document.getElementById("res-name").innerText = ticket.name;
        document.getElementById("res-id").innerText = ticket.id;
        document.getElementById("res-dest").innerText = ticket.destination;
        document.getElementById("res-flight").innerText = ticket.flight;
        document.getElementById("res-seat").innerText = ticket.seat;
        document.getElementById("res-charges").innerText = `Rs. ${ticket.charges.toLocaleString()}`;
        document.getElementById("res-passport").innerText = ticket.passportNo;

        // Setup actions
        const cancelBtn = document.getElementById("btn-cancel-reservation");
        const printBtn = document.getElementById("btn-print-from-search");

        // Clone button templates to clear previous click bindings
        const newCancelBtn = cancelBtn.cloneNode(true);
        const newPrintBtn = printBtn.cloneNode(true);

        cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);
        printBtn.parentNode.replaceChild(newPrintBtn, printBtn);

        newCancelBtn.addEventListener("click", () => deleteTicket(ticket.id));
        newPrintBtn.addEventListener("click", () => displayBoardingPassFromSearch(ticket));

        resultCard.classList.remove("hidden");
        showToast("Reservation record retrieved.", "success");
    } else {
        showToast("No active reservation found with the provided ID.", "error");
    }
}

function deleteTicket(id) {
    const reservations = getReservations();
    const ticketIdx = reservations.findIndex(res => res.id === id);

    if (ticketIdx !== -1) {
        const ticket = reservations[ticketIdx];
        
        // Remove from localStorage
        reservations.splice(ticketIdx, 1);
        saveReservations(reservations);

        // Remove seat from in-memory occupied list
        const flightId = ticket.flight;
        if (occupiedSeatsDb[flightId]) {
            occupiedSeatsDb[flightId] = occupiedSeatsDb[flightId].filter(seat => seat !== ticket.seat);
        }

        // Hide result view
        document.getElementById("search-result-card").classList.add("hidden");
        document.getElementById("search-id").value = "";

        // Update stats
        updateDashboardStats();
        renderPopularityChart();

        // Prompt Rebook Context dialog modal (mimicking C++ reservation flow)
        bookingState.passenger = {
            id: ticket.id,
            name: ticket.name,
            gender: ticket.gender,
            age: ticket.age,
            passportNo: ticket.passportNo
        };

        const rebookModal = document.getElementById("rebook-dialog");
        rebookModal.classList.remove("hidden");
    }
}

function triggerRebook(shouldRebook) {
    document.getElementById("rebook-dialog").classList.add("hidden");

    if (shouldRebook) {
        // Take to book flight directly with saved details
        switchView("booking");
        restartBookingFlow(true);
    } else {
        // Go back to main dashboard
        switchView("dashboard");
    }
}

function displayBoardingPassFromSearch(ticket) {
    // Populate Boarding Pass UI
    document.getElementById("pass-name").innerText = ticket.name;
    document.getElementById("pass-id").innerText = ticket.id;
    document.getElementById("pass-flight").innerText = ticket.flight;
    document.getElementById("pass-destination").innerText = ticket.destination;
    document.getElementById("pass-seat").innerText = ticket.seat;
    document.getElementById("pass-age-gender").innerText = `${ticket.age} Yrs / ${ticket.gender.toUpperCase()}`;
    document.getElementById("pass-passport").innerText = ticket.passportNo;

    // Boarding Pass Stub Elements
    document.getElementById("pass-stub-name").innerText = ticket.name;
    document.getElementById("pass-stub-flight-seat").innerText = `${ticket.flight} / ${ticket.seat}`;
    document.getElementById("pass-stub-dest").innerText = ticket.destination;
    document.getElementById("pass-stub-price").innerText = `Rs. ${ticket.charges.toLocaleString()}`;
    document.getElementById("pass-stub-barcode").innerText = `NG-${ticket.id}`;

    // Switch step directly to E-ticket on Booking Wizard
    switchView("booking");
    nextStep(4);
}


// --- Ticket Database View Operations ---

function renderDatabaseTable(filteredList = null) {
    const tableBody = document.getElementById("database-table-body");
    tableBody.innerHTML = "";

    const list = filteredList || getReservations();

    if (list.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="10" class="text-center text-muted">No reservations match the filter criteria.</td></tr>`;
        return;
    }

    list.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${item.id}</td>
            <td><strong>${item.name}</strong></td>
            <td><span class="status-badge on-time" style="background: rgba(255,255,255,0.03); color: #fff; border: 1px solid rgba(255,255,255,0.05);">${item.gender}</span></td>
            <td>${item.age}</td>
            <td>${item.passportNo}</td>
            <td>${item.destination}</td>
            <td><strong class="text-glow">${item.flight}</strong></td>
            <td><span class="status-badge boarding">${item.seat}</span></td>
            <td>Rs. ${item.charges.toLocaleString()}</td>
            <td>
                <div class="row" style="gap: 0.5rem; justify-content: flex-start;">
                    <button class="btn btn-secondary" style="padding: 0.4rem 0.6rem; font-size: 0.75rem; border-radius: 6px;" onclick="displayBoardingPassFromSearch(${JSON.stringify(item).replace(/"/g, '&quot;')})">
                        <i data-lucide="printer" style="width:12px; height:12px;"></i> View
                    </button>
                    <button class="btn btn-danger" style="padding: 0.4rem 0.6rem; font-size: 0.75rem; border-radius: 6px; background: #991b1b; box-shadow: none;" onclick="deleteTicketDirect('${item.id}')">
                        Cancel
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(tr);
    });
    lucide.createIcons();
}

function filterDatabase() {
    const searchQuery = document.getElementById("db-search").value.trim().toLowerCase();
    const destFilter = document.getElementById("db-filter-dest").value;

    const allBookings = getReservations();

    const filtered = allBookings.filter(b => {
        const matchesSearch = b.id.includes(searchQuery) || b.name.toLowerCase().includes(searchQuery);
        const matchesDest = !destFilter || b.destination === destFilter;
        return matchesSearch && matchesDest;
    });

    renderDatabaseTable(filtered);
}

function clearDbFilters() {
    document.getElementById("db-search").value = "";
    document.getElementById("db-filter-dest").value = "";
    renderDatabaseTable();
    showToast("Database filters cleared.", "info");
}

function deleteTicketDirect(id) {
    if (confirm("Are you sure you want to cancel this flight reservation? This action is irreversible.")) {
        const reservations = getReservations();
        const ticketIdx = reservations.findIndex(res => res.id === id);

        if (ticketIdx !== -1) {
            const ticket = reservations[ticketIdx];
            
            // Remove from database
            reservations.splice(ticketIdx, 1);
            saveReservations(reservations);

            // Remove seat from in-memory occupied list
            const flightId = ticket.flight;
            if (occupiedSeatsDb[flightId]) {
                occupiedSeatsDb[flightId] = occupiedSeatsDb[flightId].filter(seat => seat !== ticket.seat);
            }

            // Sync
            updateDashboardStats();
            renderPopularityChart();
            renderDatabaseTable();
            showToast("Reservation canceled successfully.", "success");
        }
    }
}
