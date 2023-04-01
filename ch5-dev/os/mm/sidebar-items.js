initSidebarItems({"fn":[["frame_alloc","allocate a frame"],["init","initiate heap allocator, frame allocator and kernel space"],["remap_test","Check PageTable running correctly"],["translated_byte_buffer","translate a pointer to a mutable u8 Vec through page table"],["translated_refmut","translate a generic through page table and return a mutable reference"],["translated_str","translate a pointer to a mutable u8 Vec end with `\\0` through page table to a `String`"]],"mod":[["address","Implementation of physical and virtual address and page number."],["frame_allocator","Implementation of [`FrameAllocator`] which controls all the frames in the operating system."],["heap_allocator","The global allocator"],["memory_set","Implementation of [`MapArea`] and [`MemorySet`]."],["page_table","Implementation of [`PageTableEntry`] and [`PageTable`]."]],"struct":[["FrameTracker","manage a frame which has the same lifecycle as the tracker"],["KERNEL_SPACE","a memory set instance through lazy_static! managing kernel space"],["MapPermission","map permission corresponding to that in pte: `R W X U`"],["MemorySet","memory set structure, controls virtual-memory space"],["PageTableEntry","page table entry structure"],["PhysAddr","physical address"],["PhysPageNum","physical page number"],["VirtAddr","virtual address"],["VirtPageNum","virtual page number"]]});