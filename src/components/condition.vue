<template>
  <v-app>
    <nav>
      <v-toolbar app dark color="blue darken-4" elevation="15" rounded shaped>
        <v-list-item-title
          >AIRLINE RESERVATION <v-icon>mdi-airplane</v-icon></v-list-item-title
        >
        <v-spacer></v-spacer>

        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              <v-icon left>expand_more</v-icon>
              <span>Info</span>
            </v-btn>
          </template>
          <v-list flat>
            <v-list-item
              v-for="item in items"
              :key="item.text"
              router
              :to="item.route"
              active-class="border"
            >
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    </nav>
    <v-container>
      <v-row>
        <v-col cols="12" sm="8">
          <h1>Condition of carriage</h1>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-end">
          <v-btn color="primary" @click="goBack"> Back </v-btn>
        </v-col>
      </v-row>
      <v-img
        src="@/assets/condition.jpg"
        alt="Image description"
        height="200"
        width="auto"
      ></v-img>
      <h4 class="underline">
        These Conditions of Carriage form a binding and enforceable contract of
        carriage by air to Customer(s).
      </h4>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            1. Definitions and Interpretations
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            The capitalized terms used in these Conditions of Carriage will have
            the meanings ascribed to them below.
            <br />
            <ul style="list-style-type: square">
              <br />
              <li>
                “Add-on Services” means additional services offered by IndiGo to
                Customers on a chargeable basis as described under Clause 5.1 of
                this Conditions of Carriage.
              </li>
              <br />
              <li>
                “Airline GSTIN” means the GSTIN(s) used by an airline for
                issuance of invoice to Customers for the Booking.
              </li>
              <br />
              <li>
                “Airport Charges” means PSF, UDF, ASF or any other similar fees
                charged by an airport operator including Airports Authority of
                India, from the Customers.
              </li>
              <br />
              <li>
                “Aviation Security Fees” or “ASF” means aviation security fee
                collected by IndiGo in relation to a Booking, from each Customer
                per Sector, for and on behalf of airport operators in India.
              </li>
              <br />
              <li>
                “Baggage” means Customer’s luggage/items containing personal
                property carried along by him/her in connection with the journey
                to be undertaken. Unless otherwise specified, it consists of
                both Checked-in Baggage and Hand Baggage.
              </li>
              <br />
              <li>
                “Baggage Identification Tag” means a document issued solely for
                identification of Checked-in Baggage and is attached to each
                piece of Checked-in Baggage.
              </li>
              <br />
              <li>
                “Baggage Tag” means the tag/receipt issued by IndiGo to a
                Customer at the time of web check-in or at the airport kiosk, as
                applicable which relates to the carriage of Customer’s
                Checked-in Baggage and is affixed to the boarding pass as
                applicable.
              </li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            2. Tariff, Taxes and Charges
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ul style="list-style-type: square">
              <li>
                <span style="font-weight: bold">Tariff:</span>
                <br />
                Tariff is payable only for carriage from the airport at the
                point of origin, to the airport at the point of destination,
                unless otherwise expressly stated. Tariff does not include
                ground transport service between airports or between airport
                terminals.
              </li>
              <br />
              <li>
                <span style="font-weight: bold">Taxes , fees and Charges:</span>
                <br />
                The amount of applicable taxes including GST, fees or charges
                payable by a Customer, are calculated as on the date of the
                Booking. If there is a change in an existing tax, fee or charge,
                or a new tax, fee or charge is imposed, after the date of
                Booking, a Customer will not be obliged to pay any additional
                amount (in case of an increase) or be entitled to get any refund
                (in case of any decrease), unlesstheCustomer decides to change
                the date of travel which requires a change in his Booking or
                re-booking. A Customer may also be required to pay additional
                tax, fee or charge (including Airport Charges) after completion
                of a Booking, if such amount is required to be paid to a
                Regulatory Authority in relation to the Booking, pursuant to any
                change in applicable law.
              </li>
              <br />
              <li>
                <span style="font-weight: bold">Currency:</span>
                <br />
                For the convenience of Customers, fares, applicable taxes, fees,
                and charges are also payable in the currency chosen by a
                Customer or a Travel Agent while making a Booking. A Customer or
                a Travel Agent can choose only from the options of currencies
                provided by IndiGo. Please note that the amount of Tariff and
                other fees & charges in some currencies (other than INR) are
                fixed by IndiGo, and may not be equivalent to the amount
                obtained after converting such amounts in INR at the exchange
                rate applicable at the time of Booking.
              </li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            3. Bookings - General Provisions, Payments & Invoices.
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ul style="list-style-type: square">
              <li>
                <span style="font-weight: bold">General Provisions</span>
                <br />
                The ‘Booking’ constitutes an evidence of the contract of
                carriage (except in the case of On-Hold Booking) between IndiGo
                and the Customer named in the Booking. All Bookings are subject
                to these Conditions of Carriage.
              </li>
              <br />
              <li>
                <span style="font-weight: bold">Payments & Invoices.</span>
                <br />
                IndiGo accepts Diners Club, MasterCard, VISA, Amex, Rupay cards,
                Maestro, digital wallets, net banking and payments through
                united payments interface (UPI) for Bookings made though the
                Website and IndiGo’s mobile application. IndiGo accepts Visa
                credit cards and MasterCard credit cards issued by banks for
                Bookings made through IndiGo’s Call Centre. The usage of these
                cards, as a mode of payment, is governed by the terms and
                conditions framed by the respective banks issuing such cards.
                IndiGo does not accept cheques as a mode of payment for
                Bookings.
              </li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            4. Changes, Cancellations & Refund
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ul style="list-style-type: square">
              <li>
                <span style="font-weight: bold"
                  >Changes and Cancellations:</span
                >
                <br />
                Once a Booking is made, the Tariff paid shall only be
                refundable, subject to changes or cancellation terms/fee of
                IndiGo, as mentioned below:
                <br />
                (a) Changes/cancellations of the Booking must be made at least 2
                (two) hours prior to the scheduled departure time.
                <br />
                (b) The change/cancellation fee will be deducted from the total
                amount paid at the time of Booking and the residual amount will
                be refunded to Customers (in case of cancellation) or in case of
                change in Booking, the same may be adjusted against the Tariff
                required to be paid for Customer.
              </li>
              <br />
              <li>
                <span style="font-weight: bold">Refund:</span>
                <br />
                (i) Refund through the original mode of payment:
                <br />
                (ii) Refund as a Credit Shell
              </li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header> 5.Baggage </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ul style="list-style-type: square">
              <li>Items unacceptable as Baggage</li>
              <br />
              <li>
                Checked In Baggage and Hand Baggage:
                <br />
                (i) IndiGo allows free Checked-in Baggage up to 15kg per
                person/Customer limited to 1 (one) piece only (Checked- in
                Baggage**). In case, such single (1) piece weighs above 15 kg
                per person/Customer, IndiGo will levy excess Baggage charges as
                set out under here (Excess Baggage Charges).
                <br />
                (ii)In case, a Customer wish to travel with more than 1 piece of
                Checked-in Baggage, IndiGo will levy an “Additional Piece”
                charges as set out in point no. (2) below.
              </li>
              <br />
              <li>
                Additional Piece allowance (maximum of up to 2 (two) Pieces):
                <br />
                (i)IndiGo will levy a per piece charge for each additional piece
                of Checked-in Baggage as mentioned in table below. Such charges
                do not include any weight allowance on such purchased additional
                Checked-in Baggage; and
                <br />
                (ii)Additionally, Customer will also be required to pay per kg
                Excess Baggage Charges corresponding to the weight of the
                additional Checked-in Baggage.
              </li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            6.Security Screening
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Itineraries will be checked at the time of entering the terminal
            building. Checked-in Baggage will also be screened through either:
            (i) An X-ray machine before check-in, at all non in-line baggage
            screening airports. (ii). In-line Baggage screening system of
            airport operator, subject to all the requirements of applicable law.
            Random physical checks will also be carried out of Checked-in
            Baggage in addition to X-ray screening at all such airports, in
            accordance with the norms stipulated by the Regulatory Authorities.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            7.General - Schedule, Delay and Cancellation of Flights
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            At any time, after a Booking has been made, IndiGo may change
            schedules of flights or cancel, terminate, divert, postpone,
            reschedule or delay any flight, where IndiGo reasonably considers
            the same to be justified by unavoidable factors and circumstances
            beyond IndiGo’s control including Force Majeure, for safety reasons,
            or for commercial or operational reasons. IndiGo would like to
            emphasize that any such change in schedule or cancellation of
            IndiGo’s flights on account of above factors and circumstances is at
            the absolute discretion of IndiGo, and such decision is taken
            keeping in mind the aircraft routing, aircraft connectivity and to
            avoid inconvenience to Customers at other airports.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            8.Conduct On-board the Aircraft and at airports
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ul style="list-style-type: square">
              <li>
                Use of Electronic Devices
                <br />
                For safety reasons, IndiGo may forbid or limit operation of
                electronic equipment, including but not limited to cellular
                telephones, laptop computers, portable recorders, portable
                radios, CD players, electronic games or transmitting devices,
                including radio-controlled toys and walkie-talkies, inside the
                aircraft. Operation of hearing aids and heart pacemakers is
                permitted.
              </li>
              <br />
              <li>
                Removal of life jacket
                <br />
                Any act (attempted or otherwise) of removal of life jacket from
                the aircraft seat without consent of the crew members of the
                flight is prohibited.
              </li>
              <br />
              <li>
                No consumption of alcohol, smoking and chewing of tobacco
                <br />
                Consumption/chewing of tobacco in any form, including smoking is
                strictly prohibited on all IndiGo aircraft. All lavatories are
                fitted with smoke detectors. Tampering with or disabling a smoke
                detector is prohibited.
                <br />
                Alcohol consumption on-board all IndiGo aircraft operating in
                the domestic sector is prohibited and is a punishable offence
                under applicable law.
              </li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-app>
</template>
  

<script>
export default {
  name: "condition",
  data: () => ({
    items: [
      { text: "Flight Status", route: "" },
      { text: "Cargo service", route: "" },
      { text: "Conditions of carriage", route: "/condition" },
      { text: "Fees and charges", route: "/fees" },
      { text: "Destinations", route: "" },
      { text: "Additional Info", route: "" },
    ],
  }),
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.underline {
  text-decoration: underline;
}
</style>