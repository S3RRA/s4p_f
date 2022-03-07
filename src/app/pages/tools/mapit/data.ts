import { colors } from './colors';
import { dataaa } from './dataset';
import * as _ from 'lodash';

import { a } from './mydata';

export const nodes: any[] = [];
export const links: any[]  = [];

const MAIN_NODE_SIZE = 40;
const CHILD_NODE_SIZE = 15;
const LEAF_NODE_SIZE = 5;

const MAIN_NODE_DISTANCE = 1;
const DEFAULT_DISTANCE = 50;
const LEAF_NODE_DISTANCE = 30;

const API_SIZE = 50;
const APP_SIZE = 50;
const PURPOSE_SIZE = 30;
const ROLE_SIZE = 15;
const SCOPE_SIZE = 20;

const API_DISTANCE = 50;
const APP_DISTANCE = 50;
const PURPOSE_DISTANCE = 30;
const ROLE_DISTANCE = 20;
const SCOPE_DISTANCE = 20;

const API_COLOR = colors[0][0];
const APP_COLOR = colors[1][0];
const PURPOSE_COLOR = colors[2][0];
const ROLE_COLOR = colors[3][0];
const SCOPE_COLOR = colors[4][0];

const API_2ND_COLOR = colors[0][1];
const APP_2ND_COLOR = colors[1][1];
const PURPOSE_2ND_COLOR = colors[2][1];
const ROLE_2ND_COLOR = colors[3][1];
const SCOPE_2ND_COLOR = colors[4][0];


export const MANY_BODY_STRENGTH = -20;

let i = 0;
const addMainNode = (node: any) => {
    node.size = node.size;
    node.color = node.color;
    node.collapsing = 0;
    node.collapsed = false;
    node.visibility = 'visible';
    node.type = 'Main'
    nodes.push(node);
};

const addChildNode = (parentNode: any, childNode: any, node_type: any = '2nd') => {
    nodes.push(childNode);
    addParents(parentNode, childNode);
    links.push({source: parentNode, target: childNode, distance: 300, size: childNode.size, color: parentNode.color, visibility: 'hidden', type: 'line' });
};

const assembleChildNode = (parentNode: any, id: any, numLeafs: number = 20) => {
    let childNode = { id };
    addChildNode(parentNode, childNode);
    
    for(let i=0; i<numLeafs; i++){
        addChildNode(childNode, { id:'' }, '3rd');
    }
};

const connectMainNodes = (source: any, target: any) => {
    links.push({
        source,
        target,
        distance: MAIN_NODE_DISTANCE,
        color: source.color
    });
}

const addParents = (parentNode: any, childNode: any) => {
    for(let node of nodes){
        if(node.id === parentNode.id){
            childNode.parents += `*${ parentNode.id }`;
        }
    }
}

//------------------------------------------------------------------------------------------------
//PRUEBAS 4P
/*
const dataset = a;

let api_node = { id: dataset.id, color: API_COLOR, distance: 5, size: API_SIZE, type: 'node'};

addMainNode(api_node)

for(let scope of dataset.pi_scopes){
    let scope_node =  { id: scope.id, color: SCOPE_COLOR, distance: 5, size: SCOPE_SIZE, type: 'node' };
    addChildNode(api_node, scope_node);
    for(let purpose of scope.purposes){
        let purpose_node = { id: purpose.id, color: PURPOSE_COLOR, distance: 5, size: PURPOSE_SIZE, type: 'node' };
        addChildNode(scope_node, purpose_node);
        for(let app of purpose.apps){    
            let app_node = { id: app.split(' ')[0], color: APP_COLOR, distance: 5, size: APP_SIZE, type: 'node' };
            addChildNode(purpose_node, app_node);
        }
    }
}
*/

/*
console.log(dataset);

const all_nodes: any[] = [];

let api = { id: dataset[0].api, color: API_COLOR, distance: 5, size: API_SIZE, type: 'node'};
//addMainNode(api);

let all_scopes_: any[] = [];
let all_purposes_: any[] = [];
let all_apps_: any[] = [];
/*
for(let data of dataset){    
    
    let scope = { id: data.pi_scope, color: SCOPE_COLOR, distance: 5, size: SCOPE_SIZE, type: 'node' };
    let purpose = { id: data.purpose, color: PURPOSE_COLOR, distance: 5, size: PURPOSE_SIZE, type: 'node' };
    let app = { id: data.app_id, grant_types: data.app_grant_types, color: APP_COLOR, distance: 5, size: APP_SIZE, type: 'node' };
    
    all_scopes_.push(scope);
    all_purposes_.push(purpose);
    all_apps_.push(app);

};

let all_scopes = _.uniqBy(all_scopes_, 'id');
let all_purposes = _.uniqBy(all_purposes_, 'id');
let all_apps = _.uniqBy(all_apps_, 'id');

for(let scope of all_scopes){
    addChildNode(api, scope);
    for(let purpose of all_purposes){
        addChildNode(scope, purpose);
        for(let app of all_apps){
            addChildNode(purpose, app);
        }
    }
}

console.log(all_scopes);
console.log(all_purposes);
console.log(all_apps);
*/
/*
let nodes_included: any[] = [];
addMainNode(api);

for(let i=0; i<dataset.length; i++){
    let api, scope, purpose, app;
    if(!nodes_included.includes(dataset[i].api)) {
        nodes_included.push(dataset[i].api);
        api = { id: dataset[i].api, color: API_COLOR, distance: 5, size: API_SIZE, type: 'node'};
    }
    if(!nodes_included.includes(dataset[i].pi_scope)){
        nodes_included.push(dataset[i].pi_scope);
        scope = { id: dataset[i].pi_scope, color: SCOPE_COLOR, distance: 5, size: SCOPE_SIZE, type: 'node' };
    }
    if(!nodes_included.includes(dataset[i].purpose)){
        nodes_included.push(dataset[i].purpose);
        purpose = { id: dataset[i].purpose, color: PURPOSE_COLOR, distance: 5, size: PURPOSE_SIZE, type: 'node' };
    }
    if(!nodes_included.includes(dataset[i].app_id)){
        nodes_included.push(dataset[i].purpose);
        app = { id: dataset[i].purpose, color: APP_COLOR, distance: 5, size: APP_SIZE, type: 'node' };
    }
    let a = [api, scope, purpose, app];
    if(!a.includes(undefined)){
        addChildNode(api, scope);
        addChildNode(scope, purpose);
        addChildNode(purpose, app);
    };
    if(!apps.includes(dataset[0].app_id)){
        apps.push(dataset[0].app_id)
    }
}




/*
addMainNode(api);
addChildNode(api, scope1);
addChildNode(api, scope2);
addChildNode(api, scope3);
addChildNode(scope1, role1);
addChildNode(scope2, role1);
addChildNode(scope3, role2);
addChildNode(scope1, purpose);
addChildNode(scope2, purpose);
addChildNode(scope3, purpose2);
addChildNode(purpose, app1);
addChildNode(purpose, app2);
addChildNode(purpose2, app2);
addChildNode(purpose2, app3);

/*
const api1 = { id: 'Api', color: API_COLOR, distance: 5, size: API_SIZE, type: 'node' };
const scope11 = { id: 'Scope 1', color: SCOPE_COLOR, distance: 5, size: SCOPE_SIZE, type: 'node' };
const scope21 = { id: 'Scope 2', color: SCOPE_COLOR, distance: 5, size: SCOPE_SIZE, type: 'node' };
const scope31 = { id: 'Scope 3', color: SCOPE_COLOR, distance: 5, size: SCOPE_SIZE, type: 'node' };
const role11 = { id: 'Role 1', color: ROLE_COLOR, distance: 5, size: ROLE_SIZE, type: 'node' };
const role21 = { id: 'Role 2', color: ROLE_COLOR, distance: 5, size: ROLE_SIZE, type: 'node' };
const purpose1 = { id: 'purpose 1', color: PURPOSE_COLOR, distance: 5, size: PURPOSE_SIZE, type: 'node' };
const purpose21 = { id: 'purpose 2 ', color: PURPOSE_COLOR, distance: 5, size: PURPOSE_SIZE, type: 'node' };
const app11 = { id: 'app 1', color: APP_COLOR, distance: 5, size: APP_SIZE, type: 'node' };
const app21 = { id: 'app 2', color: APP_COLOR, distance: 5, size: APP_SIZE, type: 'node' };
const app31 = { id: 'app 3', color: APP_COLOR, distance: 5, size: APP_SIZE, type: 'node' };

addMainNode(api1);
addChildNode(api1, scope11);
addChildNode(api1, scope21);
addChildNode(api1, scope31);
addChildNode(scope11, role11);
addChildNode(scope21, role11);
addChildNode(scope31, role21);
addChildNode(scope11, purpose1);
addChildNode(scope21, purpose1);
addChildNode(scope31, purpose21);
addChildNode(purpose1, app11);
addChildNode(purpose1, app21);
addChildNode(purpose21, app21);
addChildNode(purpose21, app31);


//DEFAULT DATA
/*
const artsWeb = {id: "Arts Web"};
addMainNode(artsWeb);
assembleChildNode(artsWeb, 'Community Vision');
assembleChildNode(artsWeb, 'Sillicon Valley Creates');

const socialImpactCommons = {id: "Social Impact Commons"};
addMainNode(socialImpactCommons);
assembleChildNode(socialImpactCommons, 'Theatre Bay Area');
assembleChildNode(socialImpactCommons, 'EastSide Arts Alliance');
assembleChildNode(socialImpactCommons, 'Local color');

const communityArts = {id: "Community Arts Stabilization Trust"};
addMainNode(communityArts);
assembleChildNode(communityArts, 'CounterPulse');
assembleChildNode(communityArts, 'Luggage Store Gallery');
assembleChildNode(communityArts, 'Performing Arts Workshop');
assembleChildNode(communityArts, '447 Minna St.', 5);
assembleChildNode(communityArts, 'Keeping Space Oakland');

const ambitioUS = {id:'AmbitioUS'};
addMainNode(ambitioUS);
assembleChildNode(ambitioUS, 'EBPREC', 0);
assembleChildNode(ambitioUS, 'SELC', 0);
assembleChildNode(ambitioUS, 'The Runway Project', 0);
assembleChildNode(ambitioUS, 'Common Future', 0);
assembleChildNode(ambitioUS, 'FreeLancers Union', 0);
assembleChildNode(ambitioUS, 'US Federation of Worker Cooperatives', 0);

connectMainNodes(artsWeb, socialImpactCommons);
connectMainNodes(communityArts, artsWeb);
connectMainNodes(communityArts, socialImpactCommons);
connectMainNodes(ambitioUS, socialImpactCommons);
connectMainNodes(ambitioUS, communityArts);
connectMainNodes(ambitioUS, artsWeb);
*/








