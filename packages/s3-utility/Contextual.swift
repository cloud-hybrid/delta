//
//  Contextual.swift
//  S3-Utility
//
//  Created by Jacob Sanders on 1/11/22.
//

import CoreData
import Foundation

/***
 # Import Data in the Background #
 
 To import data in the background, apps may use one or two managed object contexts.
    - A main queue context to provide data to the user interface.
    - A private queue context to perform the import on a background queue.

 Both contexts are connected to the same persistentStoreCoordinator. This configuration is more efficient than using a nested context.
    
 The sample creates a main queue context by setting up a Core Data stack using NSPersistentContainer, which initializes a main queue context in its viewContext property.
 
 https://developer.apple.com/documentation/coredata/loading_and_displaying_a_large_data_feed
*/

let Container = NSPersistentContainer(name: "Primary-State");
let Queue = Container.newBackgroundContext()

