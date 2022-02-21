"use strict";export const Foo = validate10;const schema11 = {"$id":"#/definitions/Foo","$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"foo":{"$ref":"#/definitions/Bar"}}};const schema12 = {"$id":"#/definitions/Bar","$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"bar":{"type":"string"}},"required":["bar"]};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){/*# sourceURL="#/definitions/Foo" */;let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.foo !== undefined){let data0 = data.foo;const _errs2 = errors;if(errors === _errs2){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing0;if((data0.bar === undefined) && (missing0 = "bar")){validate10.errors = [{instancePath:instancePath+"/foo",schemaPath:"#/definitions/Bar/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data0.bar !== undefined){if(typeof data0.bar !== "string"){validate10.errors = [{instancePath:instancePath+"/foo/bar",schemaPath:"#/definitions/Bar/properties/bar/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}}else {validate10.errors = [{instancePath:instancePath+"/foo",schemaPath:"#/definitions/Bar/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;}export const Bar = validate11;function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){/*# sourceURL="#/definitions/Bar" */;let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.bar === undefined) && (missing0 = "bar")){validate11.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.bar !== undefined){if(typeof data.bar !== "string"){validate11.errors = [{instancePath:instancePath+"/bar",schemaPath:"#/properties/bar/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}