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
          <h1>Fees and Charges</h1>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-end">
          <v-btn color="primary" @click="goBack"> Back </v-btn>
        </v-col>
      </v-row>
      <v-img
        src="@/assets/fees.jpg"
        alt="Image description"
        height="200"
        width="auto"
      ></v-img>
      <br />
      <h4>
        We offers various set of services (unbundled service as per Air
        Transport Circular 01 of 2021 issued by Directorate General of Civil
        Aviation (DGCA), as amended from time to time. Such services are (a) are
        optional in nature & are provided for the convenience of our
        Customer/passengers and (b) these services can be availed by payment of
        additional charges. It is clarified that Booking of the ticket can be
        made without opting /availing these unbundled services.
      </h4>
      <br />
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header> BAGGAGE CHARGES </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-simple-table fixed-header class="elevation-3">
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>3 kg Prepaid</th>
                  <th>5 kg Prepaid</th>
                  <th>10 Kg Prepaid</th>
                  <th>15 Kg Prepaid</th>
                  <th>20 Kg Prepaid</th>
                  <th>30Kg Prepaid</th>
                  <th>At Airport Per Kg</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>INR</td>
                  <td>1350</td>
                  <td>2250</td>
                  <td>4500</td>
                  <td>6750</td>
                  <td>9000</td>
                  <td>13500</td>
                  <td>550</td>
                </tr>
                <tr>
                  <td>SGD</td>
                  <td>27</td>
                  <td>45</td>
                  <td>90</td>
                  <td>135</td>
                  <td>180</td>
                  <td>270</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>AED</td>
                  <td>73</td>
                  <td>122</td>
                  <td>243</td>
                  <td>365</td>
                  <td>486</td>
                  <td>729</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>THB</td>
                  <td>594</td>
                  <td>990</td>
                  <td>1980</td>
                  <td>2970</td>
                  <td>3960</td>
                  <td>5940</td>
                  <td>242</td>
                </tr>
                <tr>
                  <td>OMR</td>
                  <td>7</td>
                  <td>11</td>
                  <td>23</td>
                  <td>34</td>
                  <td>45</td>
                  <td>68</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>NPR</td>
                  <td>2160</td>
                  <td>3600</td>
                  <td>7200</td>
                  <td>10800</td>
                  <td>14400</td>
                  <td>21600</td>
                  <td>880</td>
                </tr>
                <tr>
                  <td>USD</td>
                  <td>18</td>
                  <td>29</td>
                  <td>59</td>
                  <td>88</td>
                  <td>117</td>
                  <td>176</td>
                  <td>7</td>
                </tr>
              </tbody>
            </v-simple-table>
            <br />
            a) Check-in Baggage Allowance: 15kg per person/Customer (1 piece
            only). However, in case Customer opts for Double or Triple or Multi
            Seats services, such Customer will get additional baggage allowance
            of 10 kg, which lets them carry two pieces of checked baggage.
            Additional charges may apply for excess baggage.
            <br />
            <br />
            b) Additional Piece(s)- Checked-in Baggage: IndiGo will levy the
            following charges for checked-in Baggage exceeding 1 (one) piece, as
            follows:
            <br />
            <br />
            <v-simple-table fixed-header class="elevation-3">
              <thead>
                <tr>
                  <th>Additional Per Piece</th>
                  <th>Domestic Sector</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Pre-Book Charges (Subject to Maximum of up to 2 Pieces)**
                  </td>
                  <td>INR 900</td>
                </tr>
                <tr>
                  <td>Airport Charges**</td>
                  <td>INR 1000</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header> SEAT SELECT </v-expansion-panel-header>
          <v-expansion-panel-content>
            <span style="font-weight: bold">Seat Select – Seating plan</span>
            <br />
            <br />
            The Customers shall be charged the following rates for preferential
            seating selected under ‘Seat Select’.
            <br /><br />
            <span style="font-weight: bold">Aircraft: ATR</span>
            <br /><br />
            <v-simple-table fixed-header class="elevation-3">
              <thead>
                <tr>
                  <th>Seat Fee for ATRs</th>
                  <th>INR</th>
                  <th>SGD</th>
                  <th>AED</th>
                  <th>THB</th>
                  <th>OMR</th>
                  <th>NPR</th>
                  <th>USD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rows 1,2,19,20</td>
                  <td>500</td>
                  <td>10</td>
                  <td>27</td>
                  <td>220</td>
                  <td>3</td>
                  <td>800</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Rows 3,4,5</td>
                  <td>Nil</td>
                  <td>Nil</td>
                  <td>Nil</td>
                  <td>Nil</td>
                  <td>Nil</td>
                  <td>Nil</td>
                  <td>Nil</td>
                </tr>
                <tr>
                  <td>Rows 6-8</td>
                  <td>100</td>
                  <td>2</td>
                  <td>5.4</td>
                  <td>44</td>
                  <td>0.5</td>
                  <td>160</td>
                  <td>1.3</td>
                </tr>
                <tr>
                  <td>200</td>
                  <td>4</td>
                  <td>10.8</td>
                  <td>88</td>
                  <td>1</td>
                  <td>320</td>
                  <td>2.6</td>
                  <td>9.6</td>
                </tr>
                <tr>
                  <td>Rows 16-18</td>
                  <td>300</td>
                  <td>6</td>
                  <td>16.2</td>
                  <td>132</td>
                  <td>1.5</td>
                  <td>480</td>
                  <td>3.9</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            OTHER FEE AND CHARGES
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <span style="font-weight: bold"
              >Fast Forward (Airport Charges)</span
            >
            <br />
            <v-simple-table fixed-header class="elevation-3">
              <thead>
                <tr>
                  <th>INR</th>
                  <th>SGD</th>
                  <th>AED</th>
                  <th>THB</th>
                  <th>OMR</th>
                  <th>NPR</th>
                  <th>USD</th>
                  <th>QAR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>500</td>
                  <td>10</td>
                  <td>27</td>
                  <td>220</td>
                  <td>3</td>
                  <td>800</td>
                  <td>7</td>
                  <td>27</td>
                </tr>
              </tbody>
            </v-simple-table>
            <br /><span style="font-weight: bold">Infant</span>
            <br />
            <v-simple-table fixed-header class="elevation-3">
              <thead>
                <tr>
                  <th>INR</th>
                  <th>SGD</th>
                  <th>AED</th>
                  <th>THB</th>
                  <th>OMR</th>
                  <th>NPR</th>
                  <th>USD</th>
                  <th>QAR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1500</td>
                  <td>30</td>
                  <td>75</td>
                  <td>705</td>
                  <td>9</td>
                  <td>2685</td>
                  <td>24</td>
                  <td>86</td>
                </tr>
              </tbody>
            </v-simple-table>
            <br />
            <span style="font-weight: bold">Unaccompanied Minor</span>
            <br />
            <v-simple-table fixed-header class="elevation-3">
              <thead>
                <tr>
                  <th>INR</th>
                  <th>SGD</th>
                  <th>AED</th>
                  <th>THB</th>
                  <th>OMR</th>
                  <th>NPR</th>
                  <th>USD</th>
                  <th>QAR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2500</td>
                  <td>50</td>
                  <td>135</td>
                  <td>1100</td>
                  <td>15</td>
                  <td>4000</td>
                  <td>35</td>
                  <td>220</td>
                </tr>
              </tbody>
            </v-simple-table>
            <br />
            <span style="font-weight: bold">Travel Certificate</span>
            <v-simple-table fixed-header class="elevation-3">
              <thead>
                <tr>
                  <th>INR</th>
                  <th>SGD</th>
                  <th>AED</th>
                  <th>THB</th>
                  <th>OMR</th>
                  <th>NPR</th>
                  <th>USD</th>
                  <th>QAR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>300</td>
                  <td>6</td>
                  <td>16</td>
                  <td>132</td>
                  <td>1.5</td>
                  <td>480</td>
                  <td>4</td>
                  <td>14</td>
                </tr>
              </tbody>
            </v-simple-table>
            <br />
            <span style="font-weight: bold"
              >Special Baggage Fee (Payable at Airport)</span
            >
            <v-simple-table fixed-header class="elevation-3">
              <thead>
                <tr>
                  <th>INR</th>
                  <th>SGD</th>
                  <th>AED</th>
                  <th>THB</th>
                  <th>OMR</th>
                  <th>NPR</th>
                  <th>USD</th>
                  <th>QAR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1500</td>
                  <td>30</td>
                  <td>85</td>
                  <td>660</td>
                  <td>10</td>
                  <td>2400</td>
                  <td>20</td>
                  <td>75</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            CHANGES AND CANCELLATION
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <span style="font-weight: bold">CHANGES AND CANCELLATION</span>
            <br />
            <v-simple-table fixed-header class="elevation-3">
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>0-3 (Days) Cancellation fee</th>
                  <th>4 Days and above Cancellation fee</th>
                  <th>0-3 (Days) Change Fee</th>
                  <th>4 Days and above Change Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>INR</td>
                  <td>3500</td>
                  <td>3000</td>
                  <td>3250</td>
                  <td>2750</td>
                </tr>
                <tr>
                  <td>SGD</td>
                  <td>72</td>
                  <td>62</td>
                  <td>65</td>
                  <td>55</td>
                </tr>
                <tr>
                  <td>AED</td>
                  <td>190</td>
                  <td>163</td>
                  <td>175.5</td>
                  <td>148.5</td>
                </tr>
                <tr>
                  <td>QAR</td>
                  <td>190</td>
                  <td>163</td>
                  <td>156</td>
                  <td>132</td>
                </tr>
                <tr>
                  <td>KWD</td>
                  <td>15.7</td>
                  <td>13.5</td>
                  <td>13</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>OMR</td>
                  <td>19.8</td>
                  <td>17</td>
                  <td>16.25</td>
                  <td>13.75</td>
                </tr>
                <tr>
                  <td>USD</td>
                  <td>53</td>
                  <td>45</td>
                  <td>42.25</td>
                  <td>35.75</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-app>
</template>
  

<script>
export default {
  name: "fees",
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