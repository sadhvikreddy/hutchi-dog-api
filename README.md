# Submission for Hutchison Technologies

An interface to edit json and make it publicly available like the Client has requested. the Interface allows the client to download and upload JSON through an elobrate Graphical User Interface.
They can also, edit the list as it pleases and it is persistant, across the browser sessions

<b>Word of caution: The first call to the backend server in render would take upto a minute as the server is on free tier, This is because of the cold start. Sorry and appreciate your patience on this matter. 
As requested, i have disabled copilot and didn't use A.I for anything in the code, 
i have however used chatGPT to generate some quick assets in the frontend.</b>

## Deliverables
#### Website: [Public url](https://beautiful-dog-json-viewer.vercel.app/)
#### Try and Test Server APIs [Postman Link for API](https://www.postman.com/spaceflight-geoscientist-76942470/workspace/hutchison-demo/collection/38737874-ad483c2b-acfa-4b0d-8253-ff3513a8d8c0?action=share&source=copy-link&creator=38737874)
#### Backend URL: [Render Server Link](https://hutchi-dog-api.onrender.com)

### Additional Links:
#### Architecture Diagram (Recommended Read): [Backend Architecture documentation](https://app.eraser.io/workspace/pBmqYWQWZN5yXTyTuwG0?origin=share&elements=tuFS9kYQ1cJY24hzvMkp4w)
#### Github link(This repo): [github](https://github.com/sadhvikreddy/hutchi-dog-api)

## Features
<ul>
  <li>Dedicated backend server with following endpoints:<ul>
    <li>Upsert Data</li>
    <li>Delete Data</li>
    <li>Read Data</li>
    <li>get JSON</li>
    <li>edit by JSON</li>
  </ul></li>
  <li>Frontend Website<ul> 
  <li>Fancy list view</li>
    <li>Add New Breed (with variants)</li>
    <li>Add Variants to existing Breed</li>
    <li>Client side search</li>
    <li>JSON Viewer</li>
    <li>JSON Editor</li>
    <li>Download list as dogs.json</li>
  </ul></li>
</ul>

## Technologies Used

<ul>
  <li>VS Code</li>
  <li>backend<ul>
    <li>NodeJS With Typescript</li>
    <li>Express</li>
    <li>Docker</li>
    <li>Firestore</li>
    <li>npm</li>
    <li>vitest</li>
    <li>Render.com with Docker image</li>
  </ul></li>

  <li>Frontend<ul>
  <li>NextJS</li>
  <li>Tailwind css</li>
  <li>Framer Motion</li>
  <li>Hero UI</li>
  <li>Zustand</li>
  <li>Vercel for deployment</li>
  <li>Github Actions for CD/CI</li></ul></li>
</ul>

## Run on your local Machine

1) Clone the Repository
2) Copy "firebase-auth.json to backend folder (Commiting this key to public repo will make google disable the key)
3) Copy .env.local to nextjs-webapp folder (Just need ENDPOINT env variable).
4) FROM root directory: npm run install:dev
5) FROM root directory: npm run start:dev

   For website: http://localhost:8999
   For Server: http://localhost:9999

Note: There is not local/staging environment for this implementation. all data is persisted in production database in firebase.

## Design approach and Philosophy

First off, Thank you for giving me this oppurtunity to showcase what i can do. i will like to go through abstract architecture design in this section


Few Considerations, I wanted to keep the database schema as close to source (dogs.json) as possible. i just added couple of basic fields (Created_at and updated_at). 
For that reason, i didnt opt for a SQL Database like Postgres or SQLite. Various decisions are made to demonstrate what i can do. Like i couldve deployed to vercel
without using github actions, by directly connecting the repo to the Vercel instance.

the Secrets if i were in production environment, i would use services like google secret manager and the files in the Deployment pipeline. Couldn't demonstrate that here 
because, i need to active blaze plan on my google account.

I haven't added comments explaining the code, as i have made the code as easily readable as possible. i aim to write code which is self explainitory, without comments. (if the project asks me to add comments and documentation explaining the code. more than happy to do it. i have taken a risk and ommited out for this submission).

<i>Server<i><br />
A dedicated backend is designed which connects to database. The whole system is designed in such a way any element can be easily swapped, edited, or even added. 
By only changing the concerned elements. So, clear separation of concerns are maintained. Most of the core business logic only does one thing. i didnt extensively follow,
Test Driven Development, however, if deemed necessary the design clearly accommodate to implement unit tests. This is done through Dependency Injection system.
The injected functions/classes can be easily mocked to enable testing modules one by one. The Detailed explanination of the system is provided via Eraser.io document attached above.
The exposed endpoints are all open to test in the public postman project with example requests and reponses.

<i>Frontend</i><br />
Frontend is strictly restricted to handle GUI Logic and doesnt directly connects to Database directly. 
For this usecase, i have implemented, a local client side search. keeping things simple. if this were to be shipped. i would use services like algolia or elastic search.
I have also, added Google Knowledge Graph API for images and Metadata and decided against adding it to final product. As a personal choice, 
i liked the list without images (and its more challenging. adding images and make ui pop felt bit too easy. code for this can be found in codebase)


<i>Deployment and CI/CD</i> <br />
When there is commit in backend folder, render automatically calls deployment hook to perform a deployment.
When there are changes to nextjs-webapp folder, on push (or call from github) Vercel deployment is done through Webapp.


## Credits and References

Packages Used: Concurrently, Express, Module alias, Zod, Vitest, TSX, NextJS, TailwindCSS, HeroUI, Framer motion, Zustand, textea/json-viewer
Tech: Docker, Vercel, Github actions, Github, Render.com
Images and assets: chatGPT

##### Feel free to reach out to me on any questions.
# Thank you
