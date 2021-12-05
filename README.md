# Positions API
## Table of Contents
- [Full Setup](#full-setup)
    - [Installation](#installation)
    - [Run](#run)
- [Usage](#usage)
    - [HTTP paths](#http-paths)
    - [Create new position](#create-position)
    - [Get positions](#get-positions)

## Full Setup
### Installation

```bash
git clone https://gitlab.com/yesodot/selenium/apollo/omek/position-crud.git

cd position-crud

npm install


### Run 

```bash
npm start
```

## Usage
#### HTTP paths 

| METHOD | ENDPOINT                                                                 | DESCRIPTION                                   |
| ------ | :------------------------------------------------------------------------| :-------------------------------------------- |
| POST   |  /api/positions                                                          | Create new position                           |
| GET    |  /api/positions/                                                         | Get positions                                 |
**-------------------------------------------------------------------------------------------------------------------------------------**

### Create new position 
Create a new position

`POST /api/positions/`

#### Parameters
| Name     | Type    
| :----    | :----- 
| powerBuilding | string
| commandHierarchy | string
| nameLevel5 | string
| nameLevel4 | string
| nameLevel3 | string
| nameLevel2 | string
| nameLevel1 | string
| frameworkName | string
| rank | string
| job | string
| unitCorps | string
| jobCorps | string
| occupation | string
| availabilityType | string
| availiabilityDate | string
| projectName | string
| knowledgeCenter | string
| mofetRating | string
| academicProfession1 | string
| academicProfession2 | string
| division | string
| subdivision | string
| subsubdivision | string
#### Example Input
```typescript
{
    "powerBuilding": "some string",
    "commandHierarchy": "some string",
    "nameLevel5": "some string",
    "nameLevel4": "some string",
    "nameLevel3": "some string",
    "nameLevel2": "some string",
    "nameLevel1": "some string",
    "frameworkName": "some string",
    "rank": "some string",
    "job": "some string",
    "unitCorps": "some string",
    "jobCorps": "some string",
    "occupation": "some string",
    "availabilityType": "some string",
    "availiabilityDate": "some string",
    "projectName": "some string",
    "knowledgeCenter": "some string",
    "mofetRating": "some string",
    "academicProfession1": "some string",
    "academicProfession2": "some string",
    "division": "some string",
    "subdivision": "some string",
    "subsubdivision": "some string",
}
```
 #### Response
 ```typescript
 "status": "200 OK"
{
     "powerBuilding": "some string",
    "commandHierarchy": "some string",
    "nameLevel5": "some string",
    "nameLevel4": "some string",
    "nameLevel3": "some string",
    "nameLevel2": "some string",
    "nameLevel1": "some string",
    "frameworkName": "some string",
    "rank": "some string",
    "job": "some string",
    "unitCorps": "some string",
    "jobCorps": "some string",
    "occupation": "some string",
    "availabilityType": "some string",
    "availiabilityDate": "some string",
    "projectName": "some string",
    "knowledgeCenter": "some string",
    "mofetRating": "some string",
    "academicProfession1": "some string",
    "academicProfession2": "some string",
    "division": "some string",
    "subdivision": "some string",
    "subsubdivision": "some string",
}
 ```
**-----------------------------------------------------------------------------------------------------------------------------------------**

### Get position by id
Get all positions.
#### Request
`GET /api/positions/`
#### Response
```typescript
"status": "200 OK"
{
     "powerBuilding": "some string",
    "commandHierarchy": "some string",
    "nameLevel5": "some string",
    "nameLevel4": "some string",
    "nameLevel3": "some string",
    "nameLevel2": "some string",
    "nameLevel1": "some string",
    "frameworkName": "some string",
    "rank": "some string",
    "job": "some string",
    "unitCorps": "some string",
    "jobCorps": "some string",
    "occupation": "some string",
    "availabilityType": "some string",
    "availiabilityDate": "some string",
    "projectName": "some string",
    "knowledgeCenter": "some string",
    "mofetRating": "some string",
    "academicProfession1": "some string",
    "academicProfession2": "some string",
    "division": "some string",
    "subdivision": "some string",
    "subsubdivision": "some string",
}
```
