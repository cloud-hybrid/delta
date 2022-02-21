//
//  Persistence.swift
//  Shared
//
//  Created by Jacob Sanders on 1/10/22.
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

struct Persistence {
    static let Controller = Persistence()

    static var preview: Persistence = {
        let result = Persistence(inMemory: true)
        let viewContext = result.container.viewContext
        for _ in 0..<10 {
            let newItem = Item(context: viewContext)
            newItem.timestamp = Date()
        }
        do {
            try viewContext.save()
        } catch {
            // Replace this implementation with code to handle the error appropriately.
            // fatalError() causes the application to generate a crash log and terminate. You should not use this function in a shipping application, although it may be useful during development.
            let nsError = error as NSError
            fatalError("Unresolved error \(nsError), \(nsError.userInfo)")
        }
        return result
    }()

    let container: NSPersistentCloudKitContainer

    init(inMemory: Bool = false) {
        container = NSPersistentCloudKitContainer(name: "S3-Utility")
        if inMemory {
            container.persistentStoreDescriptions.first!.url = URL(fileURLWithPath: "/dev/null")
        }
        
        container.viewContext.automaticallyMergesChangesFromParent = true;
        
        container.loadPersistentStores(completionHandler: { (storeDescription, error) in
            if let error = error as NSError? {
                // Replace this implementation with code to handle the error appropriately.
                // fatalError() causes the application to generate a crash log and terminate. You should not use this function in a shipping application, although it may be useful during development.

                /*
                Typical reasons for an error here include:
                * The parent directory does not exist, cannot be created, or disallows writing.
                * The persistent store is not accessible, due to permissions or data protection when the device is locked.
                * The device is out of space.
                * The store could not be migrated to the current model version.
                Check the error message to determine what the actual problem was.
                */
                fatalError("Unresolved error \(error), \(error.userInfo)")
            }
        })
    }
}
