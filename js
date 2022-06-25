 if(state == "SUCCESS"){
                 var result = response.getReturnValue();
                 console.log('data result-->'+JSON.stringify(result.currentStageName));
                 var ids = result.stageOptions.map(x => x.label)
                 console.log('idss-->'+ids);
                 component.set('v.stageListItems',ids);
                 
                 var ids2 = result.statusOptions.map(x => x.label)
                 component.set("v.statusListItems",ids2);
                
             }
