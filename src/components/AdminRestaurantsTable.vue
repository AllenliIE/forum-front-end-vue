<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
          >
            Show
          </router-link>

          <a href="#" class="btn btn-link">Edit</a>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "August Kessler",
      tel: "285-581-0038 x71798",
      address: "211 Rice Summit",
      opening_hours: "08:00",
      description: "Sunt sed rerum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.49818555287808",
      viewCounts: 10,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-18T15:27:56.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 2,
      name: "Eileen Runolfsson",
      tel: "858.998.6020",
      address: "24854 Russel River",
      opening_hours: "08:00",
      description: "amet tenetur laboriosam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.38273143737176",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 3,
      name: "Kailey Hyatt",
      tel: "083.747.2736 x69914",
      address: "567 Legros Lodge",
      opening_hours: "08:00",
      description:
        "Ut necessitatibus quasi minus iure inventore facilis pariatur omnis harum. Quo cumque animi hic ratione sed excepturi et rerum. Aperiam culpa dolore.\n \rItaque fugiat eum. Et nihil voluptatum autem. Quam ipsam quaerat eius voluptates et. Qui sapiente consequuntur amet et deleniti dolor. Corrupti reprehenderit molestiae aut perferendis placeat incidunt et necessitatibus id.\n \rEst aperiam eos quos et ut. Quod eum perferendis enim veniam nam. Quia deleniti minus porro. Cum omnis optio voluptatem dolore molestiae est rerum assumenda animi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.262492328449824",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 4,
      name: "Coleman Carter",
      tel: "211-200-2234 x59622",
      address: "2386 Sonia Curve",
      opening_hours: "08:00",
      description:
        "Et et ut hic et ducimus.\nMagni consequatur sint incidunt.\nOmnis unde velit nostrum est commodi vel modi a nobis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.29674847047667",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 5,
      name: "Chanelle Medhurst IV",
      tel: "756.861.8644 x601",
      address: "762 Smith Centers",
      opening_hours: "08:00",
      description: "aut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.15714126536625",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 6,
      name: "Halle Kuhlman",
      tel: "887-241-5765 x5900",
      address: "399 Windler Valleys",
      opening_hours: "08:00",
      description:
        "Voluptatum nostrum quaerat nihil est molestiae doloremque eos omnis. Enim inventore cupiditate incidunt nulla at omnis. Voluptate debitis cumque omnis sunt. Quo suscipit labore sit explicabo labore harum beatae.\n \rUt rerum nemo aliquid odit aperiam possimus et accusamus non. Quam qui dignissimos quos porro perferendis. Libero accusamus deleniti error sunt. Ut molestias maiores voluptatem consequatur a quo dignissimos in nobis. Doloribus laudantium distinctio omnis quam eum.\n \rMinus voluptatem eveniet. Autem autem repudiandae. Quis eos qui fugit mollitia fugit excepturi. Neque maiores perferendis eos consequuntur deleniti voluptate explicabo distinctio alias. Minima voluptas fugiat delectus. Quidem aut quod.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.752585360064531",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 7,
      name: "Dolly Parker",
      tel: "1-278-135-4050",
      address: "353 Alden Ports",
      opening_hours: "08:00",
      description: "exercitationem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.35054215402931",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 8,
      name: "Ally Jakubowski",
      tel: "(689) 940-6808 x845",
      address: "8852 John Estates",
      opening_hours: "08:00",
      description: "aliquid",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=21.241460602444583",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 9,
      name: "Joel Von",
      tel: "229-693-4136 x58868",
      address: "3760 Aglae Glens",
      opening_hours: "08:00",
      description: "Non laboriosam perspiciatis dolor vitae cum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.35034648927381",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 10,
      name: "Louisa Ruecker",
      tel: "605.749.0547",
      address: "056 Stamm Place",
      opening_hours: "08:00",
      description: "Quia est recusandae.\nDoloremque et maxime est illum id.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.05166042162033",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 11,
      name: "Laney Renner",
      tel: "1-295-760-8474 x617",
      address: "53568 Marvin Orchard",
      opening_hours: "08:00",
      description:
        "Aut ea explicabo quia atque est nulla eveniet possimus. Nulla voluptatum ut aspernatur expedita in aliquam quis. Asperiores autem omnis aut doloribus sed fuga.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.6900841038365",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 12,
      name: "Immanuel Sawayn",
      tel: "(060) 714-5081 x0381",
      address: "795 Amparo Port",
      opening_hours: "08:00",
      description:
        "Numquam iste distinctio necessitatibus officiis a officia tempora omnis. Vero vel magni modi beatae fugit nemo odit. Doloribus harum tenetur blanditiis dolor enim officia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=32.904708848398265",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 13,
      name: "Kaela Pollich",
      tel: "870-487-5983",
      address: "35974 Kuvalis Lane",
      opening_hours: "08:00",
      description: "dignissimos accusamus impedit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=36.01295047950366",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 14,
      name: "Sarina Beier",
      tel: "1-039-078-9061 x97784",
      address: "534 Nader Views",
      opening_hours: "08:00",
      description:
        "Sit esse fugiat reiciendis. Cum deserunt sed ratione qui quas alias accusamus impedit voluptatem. Molestias cumque quidem ipsum qui enim quos facere.\n \rUt libero hic aut quia velit. Error perspiciatis et quo qui consequatur. Neque aliquam itaque voluptatem quas. Quia aut aperiam cumque necessitatibus facere culpa est. Beatae quis officia.\n \rIllum dolorum sunt veniam aspernatur. Officia impedit ullam odio perferendis enim tempora fugit. Et quia velit illum eum et hic voluptas dolorum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.285220709506774",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 15,
      name: "Helen Halvorson I",
      tel: "573.770.8434 x374",
      address: "37126 Hartmann Hills",
      opening_hours: "08:00",
      description: "Vero reprehenderit provident modi consequatur iure quis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.449475285568546",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 16,
      name: "Adeline Abernathy",
      tel: "(220) 309-7657",
      address: "900 Konopelski Manor",
      opening_hours: "08:00",
      description:
        "Animi sunt eligendi enim tempore veritatis aut cumque nemo voluptatibus. Ullam temporibus vitae dolorem sed eveniet id ullam quia alias. Est eaque alias nihil voluptatem perferendis asperiores modi eius.\n \rAut adipisci voluptatem rerum dolorum ab adipisci est. In possimus odit. Saepe aperiam doloribus. Iste aut eligendi consequuntur facere nesciunt.\n \rEarum quod accusamus laboriosam facilis modi. Nam omnis et maxime reiciendis neque. Qui ut tenetur eaque veniam illum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.45585426626605",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 17,
      name: "Delilah Fay",
      tel: "000-932-1054 x519",
      address: "879 Schoen Centers",
      opening_hours: "08:00",
      description: "Modi repellat molestias harum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.87776589301399",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 18,
      name: "Wanda Hackett",
      tel: "900-778-0820",
      address: "2503 Joaquin Courts",
      opening_hours: "08:00",
      description: "Et assumenda quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=33.25410881607696",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 19,
      name: "Jammie Schimmel",
      tel: "(608) 948-0685 x60761",
      address: "6020 Champlin Terrace",
      opening_hours: "08:00",
      description:
        "Tempora consequatur incidunt suscipit velit ipsum inventore eum eaque sed.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.83730182064957",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 20,
      name: "Marge Cremin",
      tel: "637.920.7203 x5509",
      address: "9089 Hane Summit",
      opening_hours: "08:00",
      description:
        "Aut perspiciatis voluptas adipisci modi. Laudantium aut in ea voluptatum. Voluptatibus officia omnis id voluptatum amet sed. Et quod ut mollitia nulla vel qui nulla nemo. Odit molestiae corrupti suscipit laboriosam rerum occaecati odit autem et. Sint qui voluptatibus id et et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=8.782507854954513",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 21,
      name: "Bell Runolfsdottir",
      tel: "(228) 540-8883 x31098",
      address: "49430 Purdy Parks",
      opening_hours: "08:00",
      description: "Magni labore ut maiores quam odit provident.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.85037949267192",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 22,
      name: "Ms. Anya Johnson",
      tel: "906-036-8916 x0080",
      address: "691 Valentina Parkways",
      opening_hours: "08:00",
      description: "Voluptatum minima et alias rem culpa eaque omnis impedit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.80357889436075",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 23,
      name: "Delilah Nienow",
      tel: "281-645-9267",
      address: "113 Shanna Gardens",
      opening_hours: "08:00",
      description:
        "Perferendis aliquam eveniet quam ducimus amet in voluptates.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=18.200763670253583",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 24,
      name: "Niko Robel",
      tel: "(294) 383-2059 x47084",
      address: "656 Timmy Ridges",
      opening_hours: "08:00",
      description:
        "Earum ut qui sit assumenda eum maxime quos. Deleniti et et sit. Sed eius et quisquam qui ut. Neque pariatur sunt hic porro non. Cum non quia ducimus aut et.\n \rPerferendis nemo ut. Eum omnis ipsam dolor et ut et rerum quos. Amet molestiae molestiae. Est inventore a perspiciatis molestiae atque consequatur minus et. Vel eius est consequatur modi dolorem rerum fugit enim adipisci. Recusandae quasi delectus ratione vel rerum ducimus natus natus consequatur.\n \rEst voluptates quibusdam. Voluptas in aperiam et blanditiis quaerat accusamus fugit cumque. Debitis enim iste.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.45247546192511",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 25,
      name: "Lola Ebert",
      tel: "343-681-1684 x162",
      address: "747 Emmerich Common",
      opening_hours: "08:00",
      description: "officiis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.34632422081953",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 26,
      name: "Marlin Connelly",
      tel: "067-738-9155",
      address: "1146 Yost Roads",
      opening_hours: "08:00",
      description: "expedita et omnis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=27.86679730595667",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 27,
      name: "Otis McCullough",
      tel: "1-952-200-8522 x8879",
      address: "66166 King Walk",
      opening_hours: "08:00",
      description:
        "Reiciendis sint voluptate totam eum quo sed quae perferendis itaque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=83.14627161768418",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 28,
      name: "Everardo Okuneva",
      tel: "430.660.8643",
      address: "7294 Nathan Lock",
      opening_hours: "08:00",
      description:
        "A occaecati qui earum id. Aut nemo tempore possimus perferendis atque impedit inventore ipsam libero. Explicabo vel inventore dolores officiis. Tenetur dolores eius quia quia aut cupiditate. Ipsam illo in. Eum rerum voluptatem fugiat.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=99.4576776980247",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 29,
      name: "Aletha Keebler",
      tel: "730-311-2520",
      address: "80681 Durgan Street",
      opening_hours: "08:00",
      description:
        "Fugiat ipsam sapiente porro. Illo omnis reiciendis odio dolorem velit adipisci facilis enim at. Totam fugit sit velit. Quae corrupti natus et rerum molestiae harum. Asperiores eum voluptatibus quaerat officia iste.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.599146943669933",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 30,
      name: "Joelle Kunde",
      tel: "1-981-608-3136 x16092",
      address: "51814 Marcellus Field",
      opening_hours: "08:00",
      description: "Voluptatem sit excepturi sapiente maxime laborum ullam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.64871433161972",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 31,
      name: "Emerald Ritchie V",
      tel: "(866) 676-6435 x408",
      address: "2717 Eldred Meadows",
      opening_hours: "08:00",
      description: "quia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.900801406502375",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 32,
      name: "Mathias Weissnat",
      tel: "693-400-4191 x7026",
      address: "04981 Bechtelar Alley",
      opening_hours: "08:00",
      description:
        "Quisquam sunt aliquam accusantium quidem excepturi non aut. Quos quam earum nemo est. Eum corporis veniam illum sapiente iusto dolorem sunt. Voluptatem deserunt aperiam ad inventore neque magni exercitationem repellendus quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=87.30365821012802",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 33,
      name: "Newton Raynor",
      tel: "343-671-4563 x7330",
      address: "8174 Nia Trail",
      opening_hours: "08:00",
      description:
        "Modi eius et ratione quod officia eum.\nDignissimos quae totam reprehenderit nihil quae voluptates dicta deleniti esse.\nIllo doloremque voluptates aut corporis accusamus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.19247276382944",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 34,
      name: "Ms. Jeanie Hahn",
      tel: "411.499.3200",
      address: "230 Clark Plaza",
      opening_hours: "08:00",
      description: "Et eos in et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.07036576856409",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 35,
      name: "Michelle Marvin Jr.",
      tel: "988-243-1019",
      address: "108 Zackary Rapids",
      opening_hours: "08:00",
      description:
        "Qui iusto consequatur placeat quia impedit dolorum tenetur. Accusamus possimus aut amet. Voluptas ut iure autem.\n \rLaudantium non sunt cum. Quos ullam minima iste doloremque exercitationem accusantium. Sint alias aliquid aspernatur dolorum non et. Sit incidunt est iure qui quidem quam excepturi repellat et. Quasi assumenda distinctio deleniti quae assumenda aut aut maxime. Odio deserunt vitae sit aut.\n \rDistinctio eos expedita a aperiam nostrum et. Modi laborum architecto in consequatur aperiam repellat inventore. Sed corrupti quia velit voluptas nemo et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.00251572371146",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 36,
      name: "Yesenia Mosciski",
      tel: "024.521.0803 x0420",
      address: "65519 Farrell Ways",
      opening_hours: "08:00",
      description:
        "Quia est numquam est.\nLaborum quas cum veritatis hic aut distinctio molestias excepturi.\nMolestiae dolorem consequatur laborum eligendi eum nobis soluta non unde.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.75201916047401",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 37,
      name: "Isom McGlynn",
      tel: "(187) 970-4259",
      address: "551 Stiedemann Curve",
      opening_hours: "08:00",
      description: "quo animi maiores",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.30572271736702",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 38,
      name: "Linwood Casper",
      tel: "(297) 449-9094",
      address: "5966 Kunze Lakes",
      opening_hours: "08:00",
      description:
        "Veniam perspiciatis officia molestiae et voluptatibus corporis sed. Dolor rerum ad tempora aut quas voluptas. Beatae est vel quo autem similique ut aut ea dolor. Assumenda nihil aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.30445443738353",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 39,
      name: "Ila Kshlerin Jr.",
      tel: "014-708-3248",
      address: "67746 Nona Cliffs",
      opening_hours: "08:00",
      description:
        "Iste animi aliquam esse. Voluptatem aperiam unde deleniti animi dolorem ullam deleniti voluptatem. Omnis temporibus voluptatibus nemo nesciunt. Necessitatibus nihil fugit distinctio. Aperiam eius dolore dolorem aut modi tenetur quia eos nobis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.766938276309184",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 40,
      name: "Mrs. Alene Kirlin",
      tel: "1-504-995-7195",
      address: "294 Gulgowski Greens",
      opening_hours: "08:00",
      description:
        "Nihil sit qui dolorem. Cumque tempora id officia sequi velit omnis cupiditate. Dolorum est et aut odit et ab saepe incidunt laborum. Eos ad quia sed unde.\n \rDignissimos voluptatibus eos unde occaecati numquam nesciunt exercitationem numquam. Magni optio qui sunt quasi. Nam quos omnis iusto quas voluptatem. Nihil quos aliquam molestiae rerum esse. Consequuntur nisi dignissimos facere quis sed.\n \rIusto dolores quam nobis earum mollitia ut. Blanditiis incidunt accusamus ea at excepturi fugiat error iusto veritatis. Veniam doloremque repudiandae dolores explicabo recusandae beatae unde. Iste culpa nam et expedita quia alias velit asperiores. Commodi sed quo cumque molestiae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.32283846482468",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 41,
      name: "Cody Oberbrunner",
      tel: "1-426-165-0153",
      address: "698 Tyrique Street",
      opening_hours: "08:00",
      description: "Nostrum quod accusantium.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.5533492564221199",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 42,
      name: "Mr. Kelsi Yost",
      tel: "(336) 926-7736 x1805",
      address: "125 DuBuque Lights",
      opening_hours: "08:00",
      description: "sed similique quam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.686855235139744",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 43,
      name: "Sabrina Hoeger",
      tel: "204.614.9789 x3706",
      address: "693 Zelma Mountain",
      opening_hours: "08:00",
      description:
        "Accusantium asperiores aut exercitationem dicta optio rerum. Fugiat ut ut nisi provident qui. Alias dolore quia atque qui officia iusto illo dolorum eum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.63983367383609",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 44,
      name: "Darby Balistreri",
      tel: "444.452.5631",
      address: "30220 Nicolas Lock",
      opening_hours: "08:00",
      description:
        "Dolor nesciunt ut. Natus in ipsam. Sed consequatur nisi quia et est consequatur voluptatem ipsum eveniet. Corporis qui aut sed libero.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=10.537993256310108",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 45,
      name: "Jermain Corkery",
      tel: "1-878-243-6709 x24145",
      address: "99014 Dario Burg",
      opening_hours: "08:00",
      description:
        "Vero libero enim impedit ut consequuntur porro qui aperiam. Repellendus maiores saepe numquam similique recusandae a facilis temporibus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.505735539789075",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 46,
      name: "Jordy O'Keefe",
      tel: "962.321.9300",
      address: "7974 Olaf Road",
      opening_hours: "08:00",
      description: "Consectetur porro et corrupti ea assumenda.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.362922578967453",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 47,
      name: "Kennith Frami",
      tel: "562.291.1881 x3687",
      address: "6893 Bogan Walks",
      opening_hours: "08:00",
      description:
        "Officiis quia aut ut a sunt. Quod tenetur ex quis laborum esse itaque laudantium. Nesciunt accusamus occaecati architecto magnam eos minima dolores. Voluptate et aspernatur illo harum ullam officia nam. Accusantium molestiae velit.\n \rEius est quod dicta culpa in vel doloremque. Cupiditate ratione illum. Suscipit qui aut id consequuntur qui recusandae.\n \rDebitis aliquam fugit omnis et aliquid. Optio tenetur ab odit. Libero aut nulla culpa dolorum quasi non nesciunt aperiam voluptas. Autem id animi recusandae fuga quas non.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.6133996856338",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 48,
      name: "Nora Legros",
      tel: "(435) 884-6796",
      address: "705 Pagac Row",
      opening_hours: "08:00",
      description:
        "Odio fuga aut et sed qui dicta ut. Necessitatibus ducimus minima aspernatur nulla. Numquam provident et facere voluptatem voluptas perspiciatis modi. Commodi error suscipit est quis laudantium et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.04848668198487",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 49,
      name: "Emanuel Kirlin",
      tel: "427.797.1107 x279",
      address: "8881 Shana Pines",
      opening_hours: "08:00",
      description: "dolorum dolore ratione",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.30020064381768",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
    {
      id: 50,
      name: "Gilbert Streich",
      tel: "307.846.6051 x2956",
      address: "911 Piper Courts",
      opening_hours: "08:00",
      description: "et voluptate aut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=13.412776950719984",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
    },
  ],
};

export default {
  name: "AdminRestaurantsTable",
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>
