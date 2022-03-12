const express = require("express");
const app = express();
const cors = require("cors");
const connectToDB = require("./models");
const port = process.env.PORT || 3000;
const User = require("./models/user");
const Message = require("./models/message");

app.use(cors());
app.use(express.json());

const messageRouter = require("./routes/messages");
app.use("/messages", messageRouter);

const userRouter = require("./routes/users");
app.use("/users", userRouter);

const messages = [
  {
    _id: { $oid: "622ca605fc13ae35610000fa" },
    message:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    createdAt: { $date: "2021-04-15T02:30:45.000Z" },
    updatedAt: { $date: "2022-02-16T17:46:11.000Z" },
    userID: "622c6e54c4bb1a477602f550",
  },
  {
    _id: { $oid: "622ca605fc13ae35610000fb" },
    message:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    createdAt: { $date: "2021-11-06T04:30:40.000Z" },
    updatedAt: { $date: "2021-04-05T08:49:50.000Z" },
    userID: "622c69d95b23ea17c4af05e1",
  },
  {
    _id: { $oid: "622ca605fc13ae35610000fc" },
    message: "In hac habitasse platea dictumst.",
    createdAt: { $date: "2021-03-23T17:09:35.000Z" },
    updatedAt: { $date: "2021-07-15T18:38:09.000Z" },
    userID: "622c6e62c4bb1a477602f552",
  },
  {
    _id: { $oid: "622ca605fc13ae35610000fd" },
    message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    createdAt: { $date: "2021-06-07T05:40:35.000Z" },
    updatedAt: { $date: "2021-12-11T14:11:55.000Z" },
    userID: "622c69d95b23ea17c4af05e1",
  },
  {
    _id: { $oid: "622ca605fc13ae35610000fe" },
    message:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    createdAt: { $date: "2022-02-10T21:36:07.000Z" },
    updatedAt: { $date: "2021-08-14T11:36:07.000Z" },
    userID: "622c6e24c4bb1a477602f54c",
  },
  {
    _id: { $oid: "622ca605fc13ae35610000ff" },
    message: "Mauris lacinia sapien quis libero.",
    createdAt: { $date: "2021-07-04T23:50:04.000Z" },
    updatedAt: { $date: "2021-07-04T05:08:31.000Z" },
    userID: "622c69d95b23ea17c4af05e1",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000100" },
    message:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    createdAt: { $date: "2021-08-11T22:58:06.000Z" },
    updatedAt: { $date: "2021-11-15T22:37:11.000Z" },
    userID: "622c69d95b23ea17c4af05e1",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000101" },
    message: "Integer ac leo.",
    createdAt: { $date: "2021-05-28T00:47:11.000Z" },
    updatedAt: { $date: "2021-08-25T12:17:58.000Z" },
    userID: "622c69d95b23ea17c4af05e1",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000102" },
    message:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    createdAt: { $date: "2021-12-27T18:35:44.000Z" },
    updatedAt: { $date: "2021-10-14T14:24:30.000Z" },
    userID: "622c6bcf96704a12931af403",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000103" },
    message:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    createdAt: { $date: "2021-05-02T21:39:54.000Z" },
    updatedAt: { $date: "2021-04-18T03:33:35.000Z" },
    userID: "622c6e24c4bb1a477602f54c",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000104" },
    message: "Aenean lectus. Pellentesque eget nunc.",
    createdAt: { $date: "2021-05-23T16:34:00.000Z" },
    updatedAt: { $date: "2021-08-27T10:05:27.000Z" },
    userID: "622c6bcf96704a12931af403",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000105" },
    message:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    createdAt: { $date: "2021-05-13T03:17:25.000Z" },
    updatedAt: { $date: "2021-09-01T13:48:30.000Z" },
    userID: "622c6e54c4bb1a477602f550",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000106" },
    message: "Donec semper sapien a libero.",
    createdAt: { $date: "2021-06-06T21:29:36.000Z" },
    updatedAt: { $date: "2021-05-04T09:18:06.000Z" },
    userID: "622c6e3fc4bb1a477602f54e",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000107" },
    message:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    createdAt: { $date: "2021-12-09T07:23:45.000Z" },
    updatedAt: { $date: "2021-12-26T11:16:00.000Z" },
    userID: "622c69d95b23ea17c4af05e1",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000108" },
    message:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    createdAt: { $date: "2021-10-16T09:44:44.000Z" },
    updatedAt: { $date: "2021-07-23T13:48:30.000Z" },
    userID: "622c69d95b23ea17c4af05e1",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000109" },
    message: "Sed ante. Vivamus tortor.",
    createdAt: { $date: "2021-07-17T06:24:03.000Z" },
    updatedAt: { $date: "2021-05-02T07:32:47.000Z" },
    userID: "622c6e54c4bb1a477602f550",
  },
  {
    _id: { $oid: "622ca605fc13ae356100010a" },
    message:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    createdAt: { $date: "2021-02-03T12:50:34.000Z" },
    updatedAt: { $date: "2021-05-08T17:29:58.000Z" },
    userID: "622c6bcf96704a12931af403",
  },
  {
    _id: { $oid: "622ca605fc13ae356100010b" },
    message: "Aliquam non mauris.",
    createdAt: { $date: "2021-02-19T23:20:17.000Z" },
    updatedAt: { $date: "2022-02-11T22:59:16.000Z" },
    userID: "622c69d95b23ea17c4af05e1",
  },
  {
    _id: { $oid: "622ca605fc13ae356100010c" },
    message: "Cras pellentesque volutpat dui.",
    createdAt: { $date: "2021-09-16T10:08:31.000Z" },
    updatedAt: { $date: "2021-08-02T20:13:46.000Z" },
    userID: "622c69d95b23ea17c4af05e1",
  },
  {
    _id: { $oid: "622ca605fc13ae356100010d" },
    message:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    createdAt: { $date: "2021-12-30T11:13:09.000Z" },
    updatedAt: { $date: "2021-12-06T05:02:19.000Z" },
    userID: "622c69d95b23ea17c4af05e1",
  },
  {
    _id: { $oid: "622ca605fc13ae356100010e" },
    message:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    createdAt: { $date: "2021-04-15T23:19:06.000Z" },
    updatedAt: { $date: "2021-12-05T20:31:29.000Z" },
    userID: "622c6e62c4bb1a477602f552",
  },
  {
    _id: { $oid: "622ca605fc13ae356100010f" },
    message:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    createdAt: { $date: "2021-09-26T06:27:43.000Z" },
    updatedAt: { $date: "2021-05-29T20:53:31.000Z" },
    userID: "622c6e62c4bb1a477602f552",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000110" },
    message: "Duis mattis egestas metus.",
    createdAt: { $date: "2022-01-09T03:08:09.000Z" },
    updatedAt: { $date: "2021-10-23T05:10:04.000Z" },
    userID: "622c6e54c4bb1a477602f550",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000111" },
    message:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    createdAt: { $date: "2021-12-03T20:50:38.000Z" },
    updatedAt: { $date: "2021-03-25T03:35:38.000Z" },
    userID: "622c6e54c4bb1a477602f550",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000112" },
    message:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    createdAt: { $date: "2021-04-09T07:26:14.000Z" },
    updatedAt: { $date: "2021-10-10T17:48:14.000Z" },
    userID: "622c6e24c4bb1a477602f54c",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000113" },
    message:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    createdAt: { $date: "2021-08-30T10:04:17.000Z" },
    updatedAt: { $date: "2021-12-09T19:07:47.000Z" },
    userID: "622c6e3fc4bb1a477602f54e",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000114" },
    message: "Proin eu mi.",
    createdAt: { $date: "2021-02-19T23:23:21.000Z" },
    updatedAt: { $date: "2021-02-12T16:24:59.000Z" },
    userID: "622c69d95b23ea17c4af05e1",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000115" },
    message:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    createdAt: { $date: "2021-03-28T00:28:51.000Z" },
    updatedAt: { $date: "2021-07-22T06:10:11.000Z" },
    userID: "622c6e24c4bb1a477602f54c",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000116" },
    message:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    createdAt: { $date: "2021-02-28T17:03:52.000Z" },
    updatedAt: { $date: "2021-04-21T04:39:29.000Z" },
    userID: "622c6e24c4bb1a477602f54c",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000117" },
    message: "In hac habitasse platea dictumst.",
    createdAt: { $date: "2021-07-25T05:01:55.000Z" },
    updatedAt: { $date: "2021-02-14T22:31:55.000Z" },
    userID: "622c6bcf96704a12931af403",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000118" },
    message: "Aliquam non mauris.",
    createdAt: { $date: "2021-08-10T17:27:03.000Z" },
    updatedAt: { $date: "2022-03-01T02:59:09.000Z" },
    userID: "622c6bcf96704a12931af403",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000119" },
    message:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    createdAt: { $date: "2022-03-03T15:59:19.000Z" },
    updatedAt: { $date: "2022-01-01T07:47:02.000Z" },
    userID: "622c69d95b23ea17c4af05e1",
  },
  {
    _id: { $oid: "622ca605fc13ae356100011a" },
    message: "Duis aliquam convallis nunc.",
    createdAt: { $date: "2021-03-21T04:41:34.000Z" },
    updatedAt: { $date: "2021-03-15T11:21:00.000Z" },
    userID: "622c6e3fc4bb1a477602f54e",
  },
  {
    _id: { $oid: "622ca605fc13ae356100011b" },
    message: "Quisque ut erat.",
    createdAt: { $date: "2022-01-13T23:55:17.000Z" },
    updatedAt: { $date: "2021-07-01T08:50:14.000Z" },
    userID: "622c6e54c4bb1a477602f550",
  },
  {
    _id: { $oid: "622ca605fc13ae356100011c" },
    message:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    createdAt: { $date: "2021-05-17T05:57:53.000Z" },
    updatedAt: { $date: "2021-11-07T23:38:19.000Z" },
    userID: "622c6bcf96704a12931af403",
  },
  {
    _id: { $oid: "622ca605fc13ae356100011d" },
    message: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    createdAt: { $date: "2021-10-28T01:27:23.000Z" },
    updatedAt: { $date: "2021-11-14T04:34:51.000Z" },
    userID: "622c6e54c4bb1a477602f550",
  },
  {
    _id: { $oid: "622ca605fc13ae356100011e" },
    message: "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    createdAt: { $date: "2021-09-22T03:15:59.000Z" },
    updatedAt: { $date: "2021-10-31T17:41:01.000Z" },
    userID: "622c6e3fc4bb1a477602f54e",
  },
  {
    _id: { $oid: "622ca605fc13ae356100011f" },
    message:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    createdAt: { $date: "2021-10-18T07:20:04.000Z" },
    updatedAt: { $date: "2021-12-22T05:00:49.000Z" },
    userID: "622c6e62c4bb1a477602f552",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000120" },
    message:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    createdAt: { $date: "2021-08-24T14:43:15.000Z" },
    updatedAt: { $date: "2021-08-25T16:30:42.000Z" },
    userID: "622c6e3fc4bb1a477602f54e",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000121" },
    message:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    createdAt: { $date: "2021-07-14T14:22:02.000Z" },
    updatedAt: { $date: "2021-08-20T08:01:51.000Z" },
    userID: "622c6e54c4bb1a477602f550",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000122" },
    message:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    createdAt: { $date: "2022-01-12T08:56:57.000Z" },
    updatedAt: { $date: "2021-09-09T22:50:12.000Z" },
    userID: "622c6bcf96704a12931af403",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000123" },
    message:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    createdAt: { $date: "2021-05-28T18:37:01.000Z" },
    updatedAt: { $date: "2021-06-28T22:50:39.000Z" },
    userID: "622c6bcf96704a12931af403",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000124" },
    message: "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    createdAt: { $date: "2021-02-13T01:15:44.000Z" },
    updatedAt: { $date: "2021-03-08T01:59:39.000Z" },
    userID: "622c6e24c4bb1a477602f54c",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000125" },
    message:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    createdAt: { $date: "2021-10-14T01:10:53.000Z" },
    updatedAt: { $date: "2021-04-10T11:00:46.000Z" },
    userID: "622c6bcf96704a12931af403",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000126" },
    message: "Nulla ac enim.",
    createdAt: { $date: "2021-11-11T13:43:29.000Z" },
    updatedAt: { $date: "2021-09-17T19:49:57.000Z" },
    userID: "622c6e3fc4bb1a477602f54e",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000127" },
    message:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    createdAt: { $date: "2021-02-15T22:56:48.000Z" },
    updatedAt: { $date: "2021-04-21T17:26:09.000Z" },
    userID: "622c69d95b23ea17c4af05e1",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000128" },
    message:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    createdAt: { $date: "2022-03-05T01:16:49.000Z" },
    updatedAt: { $date: "2021-06-20T20:57:29.000Z" },
    userID: "622c6e3fc4bb1a477602f54e",
  },
  {
    _id: { $oid: "622ca605fc13ae3561000129" },
    message:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    createdAt: { $date: "2021-06-10T12:59:23.000Z" },
    updatedAt: { $date: "2022-03-08T17:13:11.000Z" },
    userID: "622c6e54c4bb1a477602f550",
  },
  {
    _id: { $oid: "622ca605fc13ae356100012a" },
    message: "Etiam vel augue.",
    createdAt: { $date: "2021-03-20T09:21:37.000Z" },
    updatedAt: { $date: "2021-07-18T16:02:59.000Z" },
    userID: "622c6e62c4bb1a477602f552",
  },
  {
    _id: { $oid: "622ca605fc13ae356100012b" },
    message:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    createdAt: { $date: "2022-03-10T07:00:00.000Z" },
    updatedAt: { $date: "2021-11-23T21:17:52.000Z" },
    userID: "622c6bcf96704a12931af403",
  },
];

async function setStuffUp() {
  const users = await User.find();

  Message.insertMany(
    messages.map((m) => {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      return {
        message: m.message,
        userID: randomUser._id,
      };
    })
  );
}

connectToDB().then(() => {
  // setStuffUp();
  app.listen(port, () => console.log("Listening on port 3000"));
});
